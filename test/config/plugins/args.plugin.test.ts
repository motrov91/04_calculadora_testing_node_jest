// import { yarg } from "../../../src/config/plugins/args.plugin"

const runCommand = async ( args: string[]) => {
    
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('../../../src/config/plugins/args.plugin')

    return yarg;
}



describe('Test args.plugin.ts', async () => {
    test('Should return default values', async () => {
        
        const argv = await runCommand(['-b', '5']);
        expect( argv ).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false, 
            n: 'multiplication-table',
            d: 'outputs'
        }))
        
    })
})