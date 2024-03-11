import {
  VertexAI,
  HarmCategory,
  HarmBlockThreshold,
  GenerationConfig,
  Content,
} from '@google-cloud/vertexai'
import dotenv from 'dotenv'
dotenv.config()

const project = process.env.GCP_PROJECT_ID || ''
const location = process.env.GCP_LOCATION || ''

export interface ConfigGeminiType extends GenerationConfig {
  model: string
  project: string
  location: string
}

export type GeminiModel = 'gemini-1.0-pro' | 'gemini-1.0-pro-vision'

export const defaultGeminiConfig: ConfigGeminiType = {
  project,
  location,
  max_output_tokens: 256,
  temperature: 0.1,
  top_p: 1,
  top_k: 40,
  model: 'gemini-1.0-pro' as GeminiModel,
}

export const geminiChat = async (
  contents: Content[],
  config = defaultGeminiConfig,
) => {
  try {
    if (config.project === '' || config.location === '') {
      console.error(
        'GCP_PROJECT_ID and GCP_LOCATION are required in .env file.\n\nor you can pass them as arguments to the function.',
      )
      process.exit(1)
    }
    const { model, project, location, ...generation_config } = config
    const vertex_ai = new VertexAI({
      project,
      location,
    })

    // Instantiate models
    const generativeModel = vertex_ai.getGenerativeModel({
      model,
      safety_settings: [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
      generation_config,
    })

    const request = {
      contents,
    }

    const resp = await generativeModel.generateContent(request)
    if (resp == null) {
      throw new Error('Error in geminiChat: response is null')
    }
    return resp.response.candidates[0].content.parts[0].text as string
  } catch (error) {
    throw new Error(`Error in geminiChat: ${error}`)
  }
}
