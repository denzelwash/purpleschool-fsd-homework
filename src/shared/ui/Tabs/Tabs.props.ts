export interface TabsProps {
	tabs: {
		alias: string
		text: string
		value: number
	}[]
	activeTab: string
	onTabChange: (alias: string) => void
}
