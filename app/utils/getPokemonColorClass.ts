export function getPokemonColorClass(color: string): string {
	switch (color) {
		case 'white': return 'bg-white shadow-white/50 text-black'
		case 'black': return 'bg-black shadow-black/50 text-white'
		case 'blue': return 'bg-blue-500 shadow-blue-500/50 text-white'
		case 'brown': return 'bg-amber-900 shadow-amber-900/50 text-white'
		case 'gray': return 'bg-gray-500 shadow-gray-500/50 text-white'
		case 'green': return 'bg-green-500 shadow-green-500/50 text-white'
		case 'pink': return 'bg-pink-500 shadow-pink-500/50 text-white'
		case 'purple': return 'bg-purple-500 shadow-purple-500/50 text-white'
		case 'red': return 'bg-red-500 shadow-red-500/50 text-white'
		case 'yellow': return 'bg-yellow-500 shadow-yellow-500/50 text-white'
		default: return 'bg-gray-500 shadow-gray-500/50 text-white'
	}
}