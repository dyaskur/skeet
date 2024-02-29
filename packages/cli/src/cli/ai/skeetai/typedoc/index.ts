import { AIType, generatePrompt } from '@/lib/genPrompt'
import { typedocPrompt } from './prompt'

export const skeetGenTypedoc = async (aiType: AIType, content: string) => {
  try {
    const example = typedocPrompt()
    const result = generatePrompt(
      aiType,
      example.context,
      example.examples,
      content,
    )
    return result
  } catch (error) {
    throw new Error(`skeetPrompt: ${error}`)
  }
}
