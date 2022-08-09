import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';


export const Paragraph = ({ size = 'medium', children, className, ...rest }: ParagraphProps): JSX.Element => {
	switch (size) {
		case 'small':
			return <p className={cn(styles.p, styles.small, className)} {...rest}>{children}</p>;
		case 'medium':
			return <p className={cn(styles.p, styles.medium, className)} {...rest}>{children}</p>;
		case 'large':
			return <p className={cn(styles.p, styles.large, className)} {...rest}>{children}</p>;
		default:
			return <></>;
	}
};
