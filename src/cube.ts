export const cubeVertexSize = 4 * 8; // Byte size of one cube vertex.
export const cubePositionOffset = 0;
export const cubeNormalOffset = 4 * 4; // Byte offset of cube vertex color attribute.
export const cubeVertexCount = 6*3*2;
export const cubeVertexArray = new Float32Array([
    // float4 position, float4 normal
    // bottom
    1, -1, 1, 1,   0, -1, 0, 0,  
    -1, -1, 1, 1,  0, -1, 0, 0,  
    -1, -1, -1, 1, 0, -1, 0, 0,  
    1, -1, -1, 1,  0, -1, 0, 0,  
    1, -1, 1, 1,   0, -1, 0, 0,  
    -1, -1, -1, 1, 0, -1, 0, 0,

    // right
    1, 1, 1, 1,    1, 0, 0, 0,  
    1, -1, 1, 1,   1, 0, 0, 0,  
    1, -1, -1, 1,  1, 0, 0, 0,  
    1, 1, -1, 1,   1, 0, 0, 0, 
    1, 1, 1, 1,    1, 0, 0, 0,
    1, -1, -1, 1,   1, 0, 0, 0,  

    // top
    -1, 1, 1, 1,   0, 1, 0, 0,   
    1, 1, 1, 1,    0, 1, 0, 0,   
    1, 1, -1, 1,   0, 1, 0, 0,   
    -1, 1, -1, 1,  0, 1, 0, 0,   
    -1, 1, 1, 1,   0, 1, 0, 0,  
    1, 1, -1, 1,   0, 1, 0, 0, 

    // left
    -1, -1, 1, 1,  -1, 0, 0, 0,  
    -1, 1, 1, 1,   -1, 0, 0, 0,  
    -1, 1, -1, 1,  -1, 0, 0, 0,  
    -1, -1, -1, 1, -1, 0, 0, 0,  
    -1, -1, 1, 1,  -1, 0, 0, 0,  
    -1, 1, -1, 1,  -1, 0, 0, 0,  

    // back
    1, 1, 1, 1,    0, 0, 1, 0,  
    -1, 1, 1, 1,   0, 0, 1, 0,  
    -1, -1, 1, 1,  0, 0, 1, 0,  
    -1, -1, 1, 1,  0, 0, 1, 0,  
    1, -1, 1, 1,   0, 0, 1, 0, 
    1, 1, 1, 1,    0, 0, 1, 0,   

    // front
    1, -1, -1, 1,  0, 0, -1, 0, 
    -1, -1, -1, 1, 0, 0, -1, 0, 
    -1, 1, -1, 1,  0, 0, -1, 0, 
    1, 1, -1, 1,   0, 0, -1, 0, 
    1, -1, -1, 1,  0, 0, -1, 0, 
    -1, 1, -1, 1,  0, 0, -1, 0, 
]);