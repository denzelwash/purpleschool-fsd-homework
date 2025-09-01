import Check from './icons/check.svg?react'
import Star from './icons/star.svg?react'

export const Icon = {
	Check,
	Star
}

export type IconType = keyof typeof Icon
export type IconComponentType = (typeof Icon)[IconType]
