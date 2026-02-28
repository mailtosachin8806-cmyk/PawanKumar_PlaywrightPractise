import{test, expect} from '@playwright/test'
//const{test, expect} = require('@playwright/test')

/*
1. To execute sanity test case command :-
 npx playwright test tests/Tags.spec.js --project chromium --grep @sanity
2. To execute both sanity and reg test cases
 npx playwright test tests/Tags.spec.js --project chromium --grep @sanity@reg
3. To execute only sanity not reg test cases
 npx playwright test tests/Tags.spec.js --project chromium --grep @sanity --grep-invert @sanity
*/

test('Test1@sanity', async({page})=> {
    console.log('This is my test1....')
})

test('Test2@sanity', async({page})=> {
    console.log('This is my test2....')
})

test('Test3@reg', async({page})=> {
    console.log('This is my test3....')
})

test('Test4@reg', async({page})=> {
    console.log('This is my test4....')
})

test('Test5@sanity', async({page})=> {
    console.log('This is my test5....')
})

test('Test6@santiy@reg', async({page})=> {
    console.log('This is my test6....')
})