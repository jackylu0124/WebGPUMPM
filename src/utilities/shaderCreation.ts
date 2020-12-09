import * as cubeParams from "../cube";

export function createComputePipeline(code, device, glslang) {
    return device.createComputePipeline({
        computeStage: {
          module: 
            device.createShaderModule({
                code: code,
                transform: (glsl) => glslang.compileGLSL(glsl, "compute"),
              }),
          entryPoint: "main",
        },
      });
}

export function createRenderingPipeline(shaders, device, glslang) {
  return device.createRenderPipeline({
    vertexStage: {
      module: 
        device.createShaderModule({
          code: shaders.vertex,
          transform: (glsl) => glslang.compileGLSL(glsl, "vertex"),
        }),
      entryPoint: "main",
    },
    fragmentStage: {
      module: 
      device.createShaderModule({
          code: shaders.fragment,
          transform: (glsl) => glslang.compileGLSL(glsl, "fragment"),
        }),
      entryPoint: "main",
    },

    primitiveTopology: "triangle-list",

    depthStencilState: {
      depthWriteEnabled: true,
      depthCompare: "less",
      format: "depth24plus-stencil8",
    },

    vertexState: {
      vertexBuffers: [
        {
          // instanced particles buffer
          arrayStride: 8 * 4,
          stepMode: "instance",
          attributes: [
            {
              // instance position
              shaderLocation: 0,
              offset: 0,
              format: "float4",
            },
            {
              // instance velocity
              shaderLocation: 1,
              offset: 4 * 4,
              format: "float4",
            },
          ],
        },
        {
          arrayStride: cubeParams.cubeVertexSize,
          stepMode: "vertex",
          attributes: [
            {
              shaderLocation: 2,
              offset: cubeParams.cubePositionOffset,
              format: "float4",
            },
            {
              shaderLocation: 3,
              offset: cubeParams.cubeNormalOffset,
              format: "float4",
            }
          ]
        }
      ],
    },

    colorStates: [
      {
        format: "bgra8unorm",
      },
    ],
  });
}