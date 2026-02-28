//const{test, expect }= require('@playwright/test')

import {test, expect} from '@playwright/test';

test.beforeAll( async()=>{
    console.log('This is before All Hook.........')
})

test.afterAll( async()=>{
    console.log('This is after All Hook.........')
})

test.beforeEach( async()=>{
    console.log('This is before Each Hook.........')
})

test.afterEach( async()=>{
    console.log('This is after Each Hook.........')
})

//Use grouping concept

test.describe.only('Group 1', ()=> {

    test('Test 1', async({page})=>{

        console.log('This is test 1.........');
    })

    test('Test 2', async({page})=>{

        console.log('This is test 2.........');
    })

});

test.describe.skip('Group 2', ()=> {

    test('Test 3', async({page})=>{

        console.log('This is test 3.........');
    })

    test('Test 4', async({page})=>{

        console.log('This is test 4.........');
    })

})