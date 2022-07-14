
export interface LanguageSwitchState {
  generalContent: LanguageContent
  typeNames: {
    en?: LanguageTypes
    es: LanguageTypes
  }
  typeColors: LanguageTypes
}
interface LanguageContent {
  en?: LanguageProps
  es: LanguageProps
}

interface LanguageProps {
  pokedex: string
  height: string
  weight: string
  height_unit: string
  shape: string
  type: string
  ability: string
  happiness: string
  capture_rate: string
}

interface LanguageTypes {
  grass: string
  fire: string
  poison: string
  normal: string
  fighting: string
  flying: string
  ground: string
  rock: string
  bug: string
  ghost: string
  steel: string
  dragon: string
  dark: string
  fairy: string
  ice: string
  psychic: string
  shadow: string
  water: string
  electric: string
}
