import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useState, useEffect, KeyboardEvent } from 'react';
import StarIcon from './star.svg';
import { spawn } from 'child_process';


export const Rating = ({ isEditable = false, rating, setRating, ...rest}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
			return (
				<span
					className={cn(styles.star, {
							[styles.filled]: index < currentRating,
							[styles.editable]: isEditable
						})}
					onMouseEnter={() => changeDisplay(index + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(index + 1)}
				>
					<StarIcon 
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code !== 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...rest}>
			{ratingArray.map((star, i) => (<span key={i}>{star}</span>))}
		</div>
	);
};