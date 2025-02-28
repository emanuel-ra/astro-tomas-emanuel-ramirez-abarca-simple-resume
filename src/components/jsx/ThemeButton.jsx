import { useStore } from '@nanostores/react';
import { $theme, toggleTheme } from '@stores/theme';

export const ThemeButton = () => {

    const theme = useStore($theme);

    return (    
        <button onClick={toggleTheme} className='inline-block size-9 text-gray-600 hover:opacity-75 dark:text-gray-400'>
            {theme === 'light' ? <IconMoonFilled /> : <IconBrightnessUp />}
        </button>
    );

}

const IconBrightnessUp = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='inline-block size-6'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
            <path d='M12 5l0 -2'></path>
            <path d='M17 7l1.4 -1.4'></path>
            <path d='M19 12l2 0'></path>
            <path d='M17 17l1.4 1.4'></path>
            <path d='M12 19l0 2'></path>
            <path d='M7 17l-1.4 1.4'></path>
            <path d='M6 12l-2 0'></path>
            <path d='M7 7l-1.4 -1.4'></path>
        </svg>
    )
}

const IconMoonFilled = () => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="inline-block size-6">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
    )

}
