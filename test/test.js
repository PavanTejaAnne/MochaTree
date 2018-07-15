const assert = require('assert');
const Tree = require('../tree').Tree;

describe('Tree Struct', () => {
    it('Green = Done', () => {
        const valTree = new Tree;
        
        valTree.add('value','root');
        
        valTree.add('par1','value');
        valTree.add('par2','value');
        valTree.add('par3','value');
        
        valTree.add('kid1','par1');
        valTree.add('kid2','par2');
        valTree.add('kid5','par3');
        
        assert.equal(valTree.search('kid1'),true);
        assert.equal(valTree.search('kid5'),true);
        assert.equal(valTree.search('kid10'),false);
        
        valTree.remove('par3');
        assert.equal(valTree.search('kid5'), false);
        assert.equal(valTree.search('kid10'), false);
        
    });
});