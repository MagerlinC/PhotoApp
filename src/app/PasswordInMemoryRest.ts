import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PasswordDb implements InMemoryDbService {
    createDb() {
        let passwords = [
            { id: 1, pass: 'pw1' },
            { id: 2, pass: 'pw2' },
            { id: 3, pass: 'pw3' }
        ]
        return {passwords};
    }
}