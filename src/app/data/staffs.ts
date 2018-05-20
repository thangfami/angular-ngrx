import { InMemoryDbService } from 'angular-in-memory-web-api';
export class Staffs implements InMemoryDbService {
    createDb() {
        const staffs = [
            {
                id: '001',
                name: 'thang',
                age: 29,
                unit: 'c88'
            },
            {
                id: '002',
                name: 'huy',
                age: 20,
                unit: 'c88'
            }
        ];
        return { staffs: staffs };
    }
}
