import * as openai from 'openai'
export type { ChatCompletionMessageParam } from 'openai/resources'
export type { ChatCompletionChunk, ChatCompletion } from 'openai/resources/chat'
export { Stream } from 'openai/streaming'
export { openai }
export { generatePrompt } from './lib/genPrompt'
export { openAIChat, defaultOpenAIConfig } from './lib/openAIChat'
export { geminiChat, defaultGeminiConfig } from './lib/geminiChat'
export type { ConfigOpenAIType } from './lib/openAIChat'
export type { ConfigGeminiType } from './lib/geminiChat'
export type { AIType } from './lib/genPrompt'
export type { Example, InputOutput } from './lib/types/skeetaiTypes'
export { NamingEnum, SkeetAiMode, InstanceType } from './lib/types/skeetaiTypes'
