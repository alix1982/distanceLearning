import { useState } from 'react';

function useObserver(selector) {
    const section = document.querySelector(`.${selector}`);
    const [watch, setWatch] = useState(false);
    const [show, setShow] = useState(false);
    const options = {
        // root: по умолчанию window
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
    };
    const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.classList.contains(selector)) {
						// console.log(`Пользователь почти докрутил до ${selector}!`);
						setShow(true);
					}
					observer.unobserve(entry.target);
				}
			});
    };
    const observer = new IntersectionObserver(callback, options);
    if (section) {
      observer.observe(section);
    }

    return {show, setWatch};
}

export default useObserver;
