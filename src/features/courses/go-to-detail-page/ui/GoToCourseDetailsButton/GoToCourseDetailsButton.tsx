import { Link } from 'react-router'
import { Button } from '@/shared/ui'
import type { GoToCourseDetailsButtonProps } from './GoToCourseDetailsButton.props'
import { ROUTE_PATH } from '@/shared/config'

export const GoToCourseDetailsButton = ({ courseId }: GoToCourseDetailsButtonProps) => {
	return (
		<Link to={`${ROUTE_PATH.COURSES.DETAIL.replace(':id', String(courseId))}`}>
			<Button>Подробнее</Button>
		</Link>
	)
}
