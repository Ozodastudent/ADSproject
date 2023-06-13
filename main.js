function succinctBinaryTree(tree) {
    if (!tree) {
      return [];
    }
  
    const leftRepr = succinctBinaryTree(tree.left);
    const rightRepr = succinctBinaryTree(tree.right);
  
    return [tree.value, leftRepr, rightRepr];
  }
  
  function reconstructBinaryTree(repr) {
    if (!repr) {
      return null;
    }
  
    const value = repr[0];
    const leftRepr = repr[1];
    const rightRepr = repr[2];
  
    const leftTree = reconstructBinaryTree(leftRepr);
    const rightTree = reconstructBinaryTree(rightRepr);
  
    return {
      value,
      left: leftTree,
      right: rightTree,
    };
  }
  