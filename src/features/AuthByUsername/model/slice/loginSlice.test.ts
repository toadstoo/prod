import { loginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<loginSchema> = { username: '123' };
        expect(loginReducer(state as loginSchema, loginActions.setUsername('123')))
            .toEqual({ username: '123' });
    });

    test('test set password', () => {
        const state: DeepPartial<loginSchema> = { password: '123' };
        expect(loginReducer(state as loginSchema, loginActions.setPassword('123')))
            .toEqual({ password: '123' });
    });
});
