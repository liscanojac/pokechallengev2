
export interface LanguageContent {
  readonly en?: LanguageProps
  readonly es: LanguageProps
}

interface LanguageProps {
  readonly pokedex: string
  readonly height: string
  readonly weight: string
  readonly height_unit: string
  readonly shape: string
  readonly type: string
  readonly ability: string
  readonly happiness: string
  readonly capture_rate: string
}

export interface LanguageTypes {
  readonly grass: string
  readonly fire: string
  readonly poison: string
  readonly normal: string
  readonly fighting: string
  readonly flying: string
  readonly ground: string
  readonly rock: string
  readonly bug: string
  readonly ghost: string
  readonly steel: string
  readonly dragon: string
  readonly dark: string
  readonly fairy: string
  readonly ice: string
  readonly psychic: string
  readonly shadow: string
  readonly water: string
  readonly electric: string
}
