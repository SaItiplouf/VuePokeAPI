import fs from 'fs/promises';

export async function isCacheValid(filePath: string, ttl: number) {
	try {
		const stat = await fs.stat(filePath);
		return Date.now() - stat.mtimeMs < ttl;
	} catch {
		return false;
	}
}
