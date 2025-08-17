export interface EnvConfig {
	API_URl: string
}

export const CONFIG: EnvConfig = {
	API_URl: import.meta.env.API_URL
}
