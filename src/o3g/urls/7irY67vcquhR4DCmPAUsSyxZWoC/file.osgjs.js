{
  "Generator": "OpenSceneGraph 3.1.4", 
  "Version": 6, 
  "osg.Node": {
    "Children": [ {
      "osg.Node": {
        "UniqueID": 0, 
        "Name": "Root", 
        "StateSet": {
          "osg.StateSet": {
            "UniqueID": 1, 
            "AttributeList": [ {
              "osg.Material": {
                "UniqueID": 2, 
                "Ambient": [ 0, 0, 0, 1], 
                "Diffuse": [ 0.64, 0.64, 0.64, 1], 
                "Emission": [ 0, 0, 0, 1], 
                "Shininess": 10, 
                "Specular": [ 0.5, 0.5, 0.5, 1]
              }
            } ]
          }
        }, 
        "Children": [ {
          "osg.MatrixTransform": {
            "UniqueID": 3, 
            "Name": "Lamp", 
            "Matrix": [ -0.29086, 0.95517, -0.05519, 0, -0.7711, -0.19988, 0.60452, 0, 0.56639, 0.21839, 0.79467, 0, -6.38968, 3.69599, 1.06916, 1 ], 
            "Children": [ {
              "osg.LightSource": {
                "UniqueID": 4, 
                "Name": "Lamp", 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 5
                  }
                }, 
                "Light": {
                  "osg.Light": {
                    "UniqueID": 6, 
                    "Ambient": [ 1, 1, 1, 1], 
                    "ConstantAttenuation": 0, 
                    "Diffuse": [ 1, 1, 1, 1], 
                    "Direction": [ 0, 0, -1], 
                    "LightNum": 0, 
                    "LinearAttenuation": 0, 
                    "Position": [ 0, 0, 0, 1], 
                    "QuadraticAttenuation": 0.03333, 
                    "Specular": [ 1, 1, 1, 1], 
                    "SpotCutoff": 180, 
                    "SpotExponent": 0, 
                    "UserDataContainer": {
                      "UniqueID": 7, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "blender"
                      },
                      {
                        "Name": "Energy", 
                        "Value": "1.0"
                      },
                      {
                        "Name": "Color", 
                        "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                      },
                      {
                        "Name": "UseDiffuse", 
                        "Value": "true"
                      },
                      {
                        "Name": "UseSpecular", 
                        "Value": "true"
                      },
                      {
                        "Name": "Distance", 
                        "Value": "29.999982833862305"
                      },
                      {
                        "Name": "FalloffType", 
                        "Value": "INVERSE_SQUARE"
                      },
                      {
                        "Name": "UseSphere", 
                        "Value": "false"
                      },
                      {
                        "Name": "Type", 
                        "Value": "POINT"
                      } ]
                    }
                  }
                }
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 8, 
            "Name": "Circle.002", 
            "Matrix": [ 0.56335, 0, 0, 0, 0, -0, 0.56335, 0, 0, -0.56335, -0, 0, 0, 0, 0.07278, 1 ], 
            "Children": [ {
              "osg.Node": {
                "UniqueID": 9, 
                "Name": "GeodeMesh", 
                "Children": [ {
                  "osg.Geometry": {
                    "UniqueID": 10, 
                    "Name": "Circle.002", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 11, 
                        "Name": "glass", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 14, 
                            "Name": "glass", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.8, 0.8, 0.8, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.5, 0.5, 0.5, 1], 
                            "UserDataContainer": {
                              "UniqueID": 15, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.800000, 0.800000, 0.800000 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.5"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "Transparency", 
                                "Value": "true"
                              },
                              {
                                "Name": "TransparencyMethod", 
                                "Value": "Z_TRANSPARENCY"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.4000000059604645"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 13, 
                            "Name": "Texture.001", 
                            "File": "textures/transp.png", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 12, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_Alpha", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 20, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 150,
                              "Offset": 0
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 17, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 64,
                            "Offset": 300
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 19, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 64,
                            "Offset": 1068
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 18, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 64,
                            "Offset": 2092
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 16, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 64,
                            "Offset": 2604
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                } ]
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 21, 
            "Name": "Circle", 
            "Matrix": [ 0.56335, 0, 0, 0, 0, -0, 0.56335, 0, 0, -0.56335, -0, 0, 0, 0, 0.07278, 1 ], 
            "Children": [ {
              "osg.Node": {
                "UniqueID": 22, 
                "Name": "GeodeMesh.001", 
                "Children": [ {
                  "osg.Geometry": {
                    "UniqueID": 23, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 24, 
                        "Name": "coque", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 26, 
                            "Name": "coque", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.96469, 0.96469, 0.96469, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 1.25, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 27, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.964686, 0.964686, 0.964686 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "5"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.4000000059604645"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "UserDataContainer": {
                          "UniqueID": 25, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 32, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 138,
                              "Offset": 3372
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLES"
                      }
                    },
                    {
                      "DrawElementsUShort": {
                        "UniqueID": 33, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 5642,
                              "Offset": 3648
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 29, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2553,
                            "Offset": 14932
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 31, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2553,
                            "Offset": 45568
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 30, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2553,
                            "Offset": 86416
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 28, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2553,
                            "Offset": 106840
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 34, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 35, 
                        "Name": "gloss", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 37, 
                            "Name": "gloss", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.96469, 0.96469, 0.96469, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.5, 0.5, 0.5, 1], 
                            "UserDataContainer": {
                              "UniqueID": 38, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.964686, 0.964686, 0.964686 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.5"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.4000000059604645"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "UserDataContainer": {
                          "UniqueID": 36, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 43, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 24,
                              "Offset": 137476
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLES"
                      }
                    },
                    {
                      "DrawElementsUShort": {
                        "UniqueID": 44, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 1234,
                              "Offset": 137524
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 40, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 482,
                            "Offset": 139992
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 42, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 482,
                            "Offset": 145776
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 41, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 482,
                            "Offset": 153488
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 39, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 482,
                            "Offset": 157344
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 45, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 46, 
                        "Name": "pur black", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 48, 
                            "Name": "pur black", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0, 0, 0, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 49, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "0.800000011920929"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.000000, 0.000000, 0.000000 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Shadeless", 
                                "Value": "true"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "COOKTORR"
                              } ]
                            }
                          }
                        } ], 
                        "UserDataContainer": {
                          "UniqueID": 47, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 54, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 141,
                              "Offset": 163128
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLES"
                      }
                    },
                    {
                      "DrawElementsUShort": {
                        "UniqueID": 55, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 910,
                              "Offset": 163412
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 51, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 514,
                            "Offset": 165232
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 53, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 514,
                            "Offset": 171400
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 52, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 514,
                            "Offset": 179624
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 50, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 514,
                            "Offset": 183736
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 56, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 57, 
                        "Name": "camera", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 59, 
                            "Name": "camera", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.21764, 0.21764, 0.21764, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 60, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.217636, 0.217636, 0.217636 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "UserDataContainer": {
                          "UniqueID": 58, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 65, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 250,
                              "Offset": 189904
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 62, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 192,
                            "Offset": 190404
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 64, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 192,
                            "Offset": 192708
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 63, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 192,
                            "Offset": 195780
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 61, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 192,
                            "Offset": 197316
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 66, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 67, 
                        "Name": "lens", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 69, 
                            "Name": "lens", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.00857, 0.07619, 0.20508, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.05286, 0.21586, 0.36131, 1], 
                            "UserDataContainer": {
                              "UniqueID": 70, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.008568, 0.076185, 0.205079 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 0.052861, 0.215861, 0.361307 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.5"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.10000000149011612"
                              } ]
                            }
                          }
                        } ], 
                        "UserDataContainer": {
                          "UniqueID": 68, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 75, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 36,
                              "Offset": 199620
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLES"
                      }
                    },
                    {
                      "DrawElementsUShort": {
                        "UniqueID": 76, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 762,
                              "Offset": 199692
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 72, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 258,
                            "Offset": 201216
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 74, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 258,
                            "Offset": 204312
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 73, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 258,
                            "Offset": 208440
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 71, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 258,
                            "Offset": 210504
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 77, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 78, 
                        "Name": "camera2", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 80, 
                            "Name": "camera2", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.09411, 0.09411, 0.09411, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 81, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.094106, 0.094106, 0.094106 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "UserDataContainer": {
                          "UniqueID": 79, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 86, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 502,
                              "Offset": 213600
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 83, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 384,
                            "Offset": 214604
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 85, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 384,
                            "Offset": 219212
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 84, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 384,
                            "Offset": 225356
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 82, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 384,
                            "Offset": 228428
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 87, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 88, 
                        "Name": "screen", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 91, 
                            "Name": "screen", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0, 0, 0, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.5, 0.5, 0.5, 1], 
                            "UserDataContainer": {
                              "UniqueID": 92, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.800000, 0.800000, 0.800000 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.5"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.4000000059604645"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 90, 
                            "Name": "Texture", 
                            "File": "textures/screen.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 89, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_Emit", 
                            "Value": "1.5"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 97, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 3,
                              "Offset": 233036
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLES"
                      }
                    },
                    {
                      "DrawElementsUShort": {
                        "UniqueID": 98, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 12,
                              "Offset": 233044
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 94, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 8,
                            "Offset": 233068
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 96, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 8,
                            "Offset": 233164
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 95, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 8,
                            "Offset": 233292
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 93, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 8,
                            "Offset": 233356
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 99, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 100, 
                        "Name": "button", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 103, 
                            "Name": "button", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.96469, 0.96469, 0.96469, 0], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.5, 0.5, 0.5, 1], 
                            "UserDataContainer": {
                              "UniqueID": 104, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.964686, 0.964686, 0.964686 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.5"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "Transparency", 
                                "Value": "true"
                              },
                              {
                                "Name": "TransparencyMethod", 
                                "Value": "Z_TRANSPARENCY"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.4000000059604645"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        },
                        {
                          "osg.BlendFunc": {
                            "UniqueID": 105, 
                            "DestinationAlpha": "ONE_MINUS_SRC_ALPHA", 
                            "DestinationRGB": "ONE_MINUS_SRC_ALPHA", 
                            "SourceAlpha": "SRC_ALPHA", 
                            "SourceRGB": "SRC_ALPHA"
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 102, 
                            "Name": "Texture.002", 
                            "File": "textures/buton2.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 101, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 110, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 61,
                              "Offset": 233452
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 107, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 25,
                            "Offset": 233576
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 109, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 25,
                            "Offset": 233876
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 108, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 25,
                            "Offset": 234276
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 106, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 25,
                            "Offset": 234476
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 111, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 112, 
                        "Name": "camera3", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 114, 
                            "Name": "camera3", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.0245, 0.02434, 0.02434, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 115, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "0.49000000953674316"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.050000, 0.049667, 0.049667 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "UserDataContainer": {
                          "UniqueID": 113, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 120, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 838,
                              "Offset": 234776
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 117, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 640,
                            "Offset": 236452
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 119, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 640,
                            "Offset": 244132
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 118, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 640,
                            "Offset": 254372
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 116, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 640,
                            "Offset": 259492
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 121, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 122, 
                        "Name": "coquelogo", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 125, 
                            "Name": "coquelogo", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.96469, 0.96469, 0.96469, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 1.25, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 126, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.964686, 0.964686, 0.964686 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "5"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.4000000059604645"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 124, 
                            "Name": "Texture.010", 
                            "File": "textures/Apple-Logo2.png", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 123, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_UsePremultiplyAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_UsePremultiplyAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_SpecularIntensity", 
                            "Value": "0.5"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 131, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 10,
                              "Offset": 267172
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 128, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 7,
                            "Offset": 267192
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 130, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 7,
                            "Offset": 267276
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 129, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 7,
                            "Offset": 267388
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 127, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 7,
                            "Offset": 267444
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 132, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 133, 
                        "Name": "coqueshadow", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 136, 
                            "Name": "coqueshadow", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.96469, 0.96469, 0.96469, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 1.25, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 137, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.964686, 0.964686, 0.964686 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "5"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.20000000298023224"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 135, 
                            "Name": "Texture.003", 
                            "File": "textures/shade.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 134, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_SpecularColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MULTIPLY"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 142, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 1894,
                              "Offset": 267528
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 139, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 1312,
                            "Offset": 271316
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 141, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 1312,
                            "Offset": 287060
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 140, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 1312,
                            "Offset": 308052
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 138, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 1312,
                            "Offset": 318548
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                },
                {
                  "osg.Geometry": {
                    "UniqueID": 143, 
                    "Name": "Circle", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 144, 
                        "Name": "coqueinfo", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 147, 
                            "Name": "coqueinfo", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.96469, 0.96469, 0.96469, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 1.25, 
                            "Specular": [ 0, 0, 0, 1], 
                            "UserDataContainer": {
                              "UniqueID": 148, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.964686, 0.964686, 0.964686 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "5"
                              },
                              {
                                "Name": "Emit", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "Ambient", 
                                "Value": "1.0"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "TOON"
                              },
                              {
                                "Name": "SpecularToonSize", 
                                "Value": "0.4000000059604645"
                              },
                              {
                                "Name": "SpecularToonSmooth", 
                                "Value": "0.0"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 146, 
                            "Name": "Texture.004", 
                            "File": "textures/backipad.png", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 145, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_SpecularIntensity", 
                            "Value": "0.5"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 153, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 4,
                              "Offset": 334292
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 150, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334300
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 152, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334348
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 151, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334412
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 149, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334444
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                } ]
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 154, 
            "Name": "Lamp.002", 
            "Matrix": [ -0.97735, -0.14451, 0.15463, 0, 0.01342, -0.77147, -0.63612, 0, 0.21122, -0.61963, 0.75594, 0, 4.43013, -10.343, 7.78679, 1 ], 
            "Children": [ {
              "osg.LightSource": {
                "UniqueID": 155, 
                "Name": "Lamp.002", 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 156
                  }
                }, 
                "Light": {
                  "osg.Light": {
                    "UniqueID": 157, 
                    "Ambient": [ 1, 1, 1, 1], 
                    "ConstantAttenuation": 1, 
                    "Diffuse": [ 0.2, 0.2, 0.2, 1], 
                    "Direction": [ 0, 0, -1], 
                    "LightNum": 5, 
                    "LinearAttenuation": 0, 
                    "Position": [ 0, 0, 1, 0], 
                    "QuadraticAttenuation": 0, 
                    "Specular": [ 0, 0, 0, 1], 
                    "SpotCutoff": 180, 
                    "SpotExponent": 0, 
                    "UserDataContainer": {
                      "UniqueID": 158, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "blender"
                      },
                      {
                        "Name": "Energy", 
                        "Value": "0.20000000298023224"
                      },
                      {
                        "Name": "Color", 
                        "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                      },
                      {
                        "Name": "UseDiffuse", 
                        "Value": "true"
                      },
                      {
                        "Name": "UseSpecular", 
                        "Value": "false"
                      },
                      {
                        "Name": "Distance", 
                        "Value": "29.999982833862305"
                      },
                      {
                        "Name": "Type", 
                        "Value": "HEMI"
                      } ]
                    }
                  }
                }
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 159, 
            "Name": "Lamp.003", 
            "Matrix": [ 0.29086, 0.05519, -0.95517, 0, 0.7711, -0.60452, 0.19988, 0, -0.56639, -0.79467, -0.21839, 0, 8.97177, 8.81102, 10.3856, 1 ], 
            "Children": [ {
              "osg.LightSource": {
                "UniqueID": 160, 
                "Name": "Lamp.003", 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 161
                  }
                }, 
                "Light": {
                  "osg.Light": {
                    "UniqueID": 162, 
                    "Ambient": [ 1, 1, 1, 1], 
                    "ConstantAttenuation": 0, 
                    "Diffuse": [ 1.5, 1.5, 1.5, 1], 
                    "Direction": [ 0, 0, -1], 
                    "LightNum": 6, 
                    "LinearAttenuation": 0, 
                    "Position": [ 0, 0, 0, 1], 
                    "QuadraticAttenuation": 0.03333, 
                    "Specular": [ 0, 0, 0, 1], 
                    "SpotCutoff": 180, 
                    "SpotExponent": 0, 
                    "UserDataContainer": {
                      "UniqueID": 163, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "blender"
                      },
                      {
                        "Name": "Energy", 
                        "Value": "1.5"
                      },
                      {
                        "Name": "Color", 
                        "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                      },
                      {
                        "Name": "UseDiffuse", 
                        "Value": "true"
                      },
                      {
                        "Name": "UseSpecular", 
                        "Value": "false"
                      },
                      {
                        "Name": "Distance", 
                        "Value": "29.999982833862305"
                      },
                      {
                        "Name": "FalloffType", 
                        "Value": "INVERSE_SQUARE"
                      },
                      {
                        "Name": "UseSphere", 
                        "Value": "false"
                      },
                      {
                        "Name": "Type", 
                        "Value": "POINT"
                      } ]
                    }
                  }
                }
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 164, 
            "Name": "Lamp.004", 
            "Matrix": [ 0.29086, 0.05519, -0.95517, 0, 0.7711, -0.60452, 0.19988, 0, -0.56639, -0.79467, -0.21839, 0, 5.96377, -0.18159, 9.98033, 1 ], 
            "Children": [ {
              "osg.LightSource": {
                "UniqueID": 165, 
                "Name": "Lamp.004", 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 166
                  }
                }, 
                "Light": {
                  "osg.Light": {
                    "UniqueID": 167, 
                    "Ambient": [ 1, 1, 1, 1], 
                    "ConstantAttenuation": 0, 
                    "Diffuse": [ 0.28, 0.28, 0.28, 1], 
                    "Direction": [ 0, 0, -1], 
                    "LightNum": 1, 
                    "LinearAttenuation": 0, 
                    "Position": [ 0, 0, 0, 1], 
                    "QuadraticAttenuation": 0.03333, 
                    "Specular": [ 0, 0, 0, 1], 
                    "SpotCutoff": 180, 
                    "SpotExponent": 0, 
                    "UserDataContainer": {
                      "UniqueID": 168, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "blender"
                      },
                      {
                        "Name": "Energy", 
                        "Value": "0.2800000309944153"
                      },
                      {
                        "Name": "Color", 
                        "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                      },
                      {
                        "Name": "UseDiffuse", 
                        "Value": "true"
                      },
                      {
                        "Name": "UseSpecular", 
                        "Value": "false"
                      },
                      {
                        "Name": "Distance", 
                        "Value": "29.999982833862305"
                      },
                      {
                        "Name": "FalloffType", 
                        "Value": "INVERSE_SQUARE"
                      },
                      {
                        "Name": "UseSphere", 
                        "Value": "false"
                      },
                      {
                        "Name": "Type", 
                        "Value": "POINT"
                      } ]
                    }
                  }
                }
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 169, 
            "Name": "Lamp.005", 
            "Matrix": [ 0.29086, 0.05519, -0.95517, 0, 0.7711, -0.60452, 0.19988, 0, -0.56639, -0.79467, -0.21839, 0, 1.61084, 8.34597, 5.95053, 1 ], 
            "Children": [ {
              "osg.LightSource": {
                "UniqueID": 170, 
                "Name": "Lamp.005", 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 171
                  }
                }, 
                "Light": {
                  "osg.Light": {
                    "UniqueID": 172, 
                    "Ambient": [ 1, 1, 1, 1], 
                    "ConstantAttenuation": 0, 
                    "Diffuse": [ 0.5, 0.5, 0.5, 1], 
                    "Direction": [ 0, 0, -1], 
                    "LightNum": 2, 
                    "LinearAttenuation": 0, 
                    "Position": [ 0, 0, 0, 1], 
                    "QuadraticAttenuation": 0.03333, 
                    "Specular": [ 0, 0, 0, 1], 
                    "SpotCutoff": 180, 
                    "SpotExponent": 0, 
                    "UserDataContainer": {
                      "UniqueID": 173, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "blender"
                      },
                      {
                        "Name": "Energy", 
                        "Value": "0.5"
                      },
                      {
                        "Name": "Color", 
                        "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                      },
                      {
                        "Name": "UseDiffuse", 
                        "Value": "true"
                      },
                      {
                        "Name": "UseSpecular", 
                        "Value": "false"
                      },
                      {
                        "Name": "Distance", 
                        "Value": "29.999982833862305"
                      },
                      {
                        "Name": "FalloffType", 
                        "Value": "INVERSE_SQUARE"
                      },
                      {
                        "Name": "UseSphere", 
                        "Value": "false"
                      },
                      {
                        "Name": "Type", 
                        "Value": "POINT"
                      } ]
                    }
                  }
                }
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 174, 
            "Name": "Lamp.006", 
            "Matrix": [ -0.97735, -0.14451, 0.15463, 0, 0.01342, -0.77147, -0.63612, 0, 0.21122, -0.61963, 0.75594, 0, 4.43013, -10.343, 7.78679, 1 ], 
            "Children": [ {
              "osg.LightSource": {
                "UniqueID": 175, 
                "Name": "Lamp.006", 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 176
                  }
                }, 
                "Light": {
                  "osg.Light": {
                    "UniqueID": 177, 
                    "Ambient": [ 1, 1, 1, 1], 
                    "ConstantAttenuation": 1, 
                    "Diffuse": [ 0.7, 0.7, 0.7, 1], 
                    "Direction": [ 0, 0, -1], 
                    "LightNum": 3, 
                    "LinearAttenuation": 0, 
                    "Position": [ 0, 0, 1, 0], 
                    "QuadraticAttenuation": 0, 
                    "Specular": [ 0, 0, 0, 1], 
                    "SpotCutoff": 180, 
                    "SpotExponent": 0, 
                    "UserDataContainer": {
                      "UniqueID": 178, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "blender"
                      },
                      {
                        "Name": "Energy", 
                        "Value": "0.699999988079071"
                      },
                      {
                        "Name": "Color", 
                        "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                      },
                      {
                        "Name": "UseDiffuse", 
                        "Value": "true"
                      },
                      {
                        "Name": "UseSpecular", 
                        "Value": "false"
                      },
                      {
                        "Name": "Distance", 
                        "Value": "29.999982833862305"
                      },
                      {
                        "Name": "Type", 
                        "Value": "SUN"
                      } ]
                    }
                  }
                }
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 179, 
            "Name": "Lamp.001", 
            "Matrix": [ 0.18494, 0.03509, -0.60731, 0, 0.49028, -0.38437, 0.12709, 0, -0.36012, -0.50527, -0.13886, 0, 3.57303, -7.62893, 11.766, 1 ], 
            "Children": [ {
              "osg.LightSource": {
                "UniqueID": 180, 
                "Name": "Lamp.001", 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 181
                  }
                }, 
                "Light": {
                  "osg.Light": {
                    "UniqueID": 182, 
                    "Ambient": [ 1, 1, 1, 1], 
                    "ConstantAttenuation": 0, 
                    "Diffuse": [ 1, 1, 1, 1], 
                    "Direction": [ 0, 0, -1], 
                    "LightNum": 4, 
                    "LinearAttenuation": 0, 
                    "Position": [ 0, 0, 0, 1], 
                    "QuadraticAttenuation": 0.03333, 
                    "Specular": [ 1, 1, 1, 1], 
                    "SpotCutoff": 180, 
                    "SpotExponent": 0, 
                    "UserDataContainer": {
                      "UniqueID": 183, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "blender"
                      },
                      {
                        "Name": "Energy", 
                        "Value": "1.0"
                      },
                      {
                        "Name": "Color", 
                        "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                      },
                      {
                        "Name": "UseDiffuse", 
                        "Value": "true"
                      },
                      {
                        "Name": "UseSpecular", 
                        "Value": "true"
                      },
                      {
                        "Name": "Distance", 
                        "Value": "29.999982833862305"
                      },
                      {
                        "Name": "FalloffType", 
                        "Value": "INVERSE_SQUARE"
                      },
                      {
                        "Name": "UseSphere", 
                        "Value": "false"
                      },
                      {
                        "Name": "Type", 
                        "Value": "POINT"
                      } ]
                    }
                  }
                }
              }
            } ]
          }
        },
        {
          "osg.MatrixTransform": {
            "UniqueID": 184, 
            "Name": "Plane.001", 
            "Matrix": [ 22.2345, 0, 0, 0, 0, 4.11901, 0, 0, 0, 0, 4.11901, 0, -0.00254, 0.04904, 0.02509, 1 ], 
            "Children": [ {
              "osg.Node": {
                "UniqueID": 185, 
                "Name": "GeodePlane.001", 
                "Children": [ {
                  "osg.Geometry": {
                    "UniqueID": 186, 
                    "Name": "Plane.001", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 187, 
                        "Name": "Material.001", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 190, 
                            "Name": "Material.001", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.64, 0.64, 0.64, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.5, 0.5, 0.5, 1], 
                            "UserDataContainer": {
                              "UniqueID": 191, 
                              "Values": [ {
                                "Name": "source", 
                                "Value": "blender"
                              },
                              {
                                "Name": "DiffuseIntensity", 
                                "Value": "0.800000011920929"
                              },
                              {
                                "Name": "DiffuseColor", 
                                "Value": "[ 0.800000, 0.800000, 0.800000 ]"
                              },
                              {
                                "Name": "SpecularIntensity", 
                                "Value": "0.5"
                              },
                              {
                                "Name": "SpecularColor", 
                                "Value": "[ 1.000000, 1.000000, 1.000000 ]"
                              },
                              {
                                "Name": "SpecularHardness", 
                                "Value": "50"
                              },
                              {
                                "Name": "Shadeless", 
                                "Value": "true"
                              },
                              {
                                "Name": "Translucency", 
                                "Value": "0.0"
                              },
                              {
                                "Name": "DiffuseShader", 
                                "Value": "LAMBERT"
                              },
                              {
                                "Name": "SpecularShader", 
                                "Value": "COOKTORR"
                              },
                              {
                                "Name": "Transparency", 
                                "Value": "true"
                              },
                              {
                                "Name": "TransparencyMethod", 
                                "Value": "Z_TRANSPARENCY"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 189, 
                            "Name": "Texture.011", 
                            "File": "textures/ao1.png", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 188, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_UseAlpha", 
                            "Value": "true"
                          },
                          {
                            "Name": "00_Alpha", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 196, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 4,
                              "Offset": 334492
                            }
                          }, 
                          "ItemSize": 1, 
                          "Type": "ELEMENT_ARRAY_BUFFER"
                        }, 
                        "Mode": "TRIANGLE_STRIP"
                      }
                    } ], 
                    "VertexAttributeList": {
                      "Normal": {
                        "UniqueID": 193, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334500
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 195, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334548
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 194, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334612
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 192, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4,
                            "Offset": 334644
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }
                    }
                  }
                } ]
              }
            } ]
          }
        } ]
      }
    } ]
  }
}