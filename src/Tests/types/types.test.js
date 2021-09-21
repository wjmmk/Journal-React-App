import { types } from "../../Types/type"

describe('tests of types', () => {

    test('must have these types', () => {

        expect( types ).toEqual({

                login: '[Auth] Login',
                logout: '[Auth] Logout',
            
                registerError: '[Register] Set Error',
                removeError: '[Remover] Remove Error',
            
                uiStartLoading: '[UI] Start loading',
                uiFinishLoading: '[UI] Finish loading',
            
                notesAddNew: '[Notes] New note',
                notesActive: '[Notes] Set Active note',
                notesLoad: '[Notes] Load note',
                notesUpdated: '[Notes] Update note',
                notesImageUrl: '[Notes] Update image url',
                notesDelete: '[Notes] Delete note',
                notesLogoutCleaning: '[Notes] Logout cleaning',
                
            })
    })
})