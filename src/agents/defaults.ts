// Defaults for agent metadata when upstream does not supply them.
// Default to local Ollama with Phi-3 Mini to avoid cloud dependencies.
export const DEFAULT_PROVIDER = "ollama";
export const DEFAULT_MODEL = "phi3:mini";
// Context window: Phi-3 Mini defaults to ~8k tokens for most Ollama setups.
export const DEFAULT_CONTEXT_TOKENS = 8_192;
