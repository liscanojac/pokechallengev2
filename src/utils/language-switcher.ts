import { LanguageContent, LanguageTypes } from "@/interfaces/language-content"

export const generalContent = {
  en: {
    pokedex: 'Choose a',
    height: 'height',
    weight: 'weight',
    height_unit: 'ft.',
    weight_unit: 'lbs.',
    name: 'name',
    shape: 'shape',
    type: 'type',
    ability: 'ability',
    happiness: 'happiness',
    capture_rate: 'capture rate'
  },
  es: {
    pokedex: 'Elige un',
    height: 'altura',
    weight: 'peso',
    height_unit: 'cms.',
    weight_unit: 'kgs.',
    name: 'nombre',
    shape: 'forma',
    type: 'tipo',
    ability: 'habilidad',
    happiness: 'felicidad',
    capture_rate: 'probabilidad de captura'
  }
} as LanguageContent

const typeNames = {
  es: {
    grass: "hierba",
    fire: "fuego",
    poison: "veneno",
    normal: "normal",
    fighting: "lucha",
    flying: "volador",
    ground: "tierra",
    rock: "roca",
    bug: "insecto",
    ghost: "fantasma",
    steel: "acero",
    dragon: "dragon",
    dark: "oscuro",
    fairy: "hada",
    ice: "hielo",
    psychic: "psiquico",
    shadow: "sombra",
    water: "agua",
    electric: "electrico",
  } as LanguageTypes
}

const typeColors = {
  fire: 'bg-red-500 text-white',
  grass: 'bg-green-400 text-white',
  poison: 'bg-purple-800 text-white',
  normal: 'text-black ring-2 ring-inset ring-black',
  fighting: 'bg-pink-300 text-white',
  flying: 'bg-blue-200 text-black',
  ground: 'bg-yellow-600 text-white',
  rock: 'bg-gray-400 text-white',
  bug: 'bg-green-300 text-white',
  ghost: 'bg-indigo-900 text-white',
  steel: 'bg-gray-300 text-black',
  electric: 'bg-yellow-300 text-black',
  dragon: 'bg-pink-800 text-white',
  dark: 'bg-black text-white',
  fairy: 'bg-pink-200 text-black',
  ice: 'bg-indigo-200 text-black',
  psychic: 'bg-pink-600 text-white',
  shadow: 'bg-gray-700 text-white',
  water: 'bg-blue-500 text-white'
} as LanguageTypes


