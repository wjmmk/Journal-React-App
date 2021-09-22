import { fileUpload } from '../../Helpers/fileUpload';

describe('teste in fileUpload', () => {
    
    test('must upload a file and return the url', async () => {
       
        const resp = await fetch('https://www.kindpng.com/picc/m/148-1481404_clipart-small-size-image-download-hd-png-download.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        console.log(url);

        expect(typeof url).toBe('string');
    });
});