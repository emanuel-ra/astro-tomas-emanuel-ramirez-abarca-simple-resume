import MexicoFlag from '@components/flags/Mexico.astro';
import UnitedStatesFlag from '@components/flags/UnitedStates.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof MexicoFlag }
> = {	
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: MexicoFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'bio.education': 'Educación',
		'work-experience': 'Experiencia Laboral',		
	},
	en: {
		'bio.education': 'Education',
		'work-experience': 'Work Experience',		
	}
} as const;

export const routes = {
	es: {		
		info: 'info',
		
	},
	en: {		
		info: 'information',		
	}
};