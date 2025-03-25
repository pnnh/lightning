export function useBrowserConfig() {
    console.debug('import.meta', import.meta)
    const rawEnv = (import.meta as any).env

    let newEnv = {} as any
    for (const key in rawEnv) {
        console.debug('rawEnv Key', rawEnv[key])
        if (key.startsWith('VITE_')) {
            const newKey = key.replace('VITE_', '')
            newEnv[newKey] = rawEnv[key]
        }
    }
    console.debug('newEnv', newEnv)
    return newEnv
}
