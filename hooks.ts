import test from './page-object-manager/pageObjectManager'
// import projectData from '../testdata/projectData.json';
test.beforeAll(async ({}) => {
    console.log('Before all the tests...')    
});

test.afterAll(async () => {
    console.log('After all the tests...');
});
export default test