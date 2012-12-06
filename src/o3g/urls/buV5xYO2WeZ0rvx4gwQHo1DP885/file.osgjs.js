{
  "Generator": "OpenSceneGraph 3.1.3", 
  "Version": 6, 
  "osg.Node": {
    "Children": [ {
      "osg.Node": {
        "UniqueID": 0, 
        "Name": "Root", 
        "Children": [ {
          "osg.MatrixTransform": {
            "UniqueID": 1, 
            "Name": "Eotech 552", 
            "Matrix": [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.97168, 0.42977, 0.45247, 1 ], 
            "Children": [ {
              "osg.Node": {
                "UniqueID": 2, 
                "Name": "GeodeMesh", 
                "Children": [ {
                  "osg.Geometry": {
                    "UniqueID": 3, 
                    "Name": "Eotech 552", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 4, 
                        "Name": "EoTech", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 9, 
                            "Name": "EoTech", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.64, 0.64, 0.64, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.16935, 0.16935, 0.16935, 1], 
                            "UserDataContainer": {
                              "UniqueID": 10, 
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
                                "Value": "0.16935484111309052"
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
                                "Value": "COOKTORR"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 6, 
                            "Name": "Nor", 
                            "File": "textures/eotech_normal.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 7, 
                            "Name": "Diff", 
                            "File": "textures/eotech_diffuse.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 8, 
                            "Name": "Texture.003", 
                            "File": "textures/eotech_specular.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 5, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_Normal", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "01_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "01_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "02_SpecularIntensity", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "02_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 17, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 96,
                              "Offset": 0
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
                        "UniqueID": 18, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 4016,
                              "Offset": 192
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
                        "UniqueID": 12, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2140,
                            "Offset": 8224
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 16, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2140,
                            "Offset": 33904
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 13, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2140,
                            "Offset": 68144
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord1": {
                        "UniqueID": 14, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2140,
                            "Offset": 85264
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord2": {
                        "UniqueID": 15, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2140,
                            "Offset": 102384
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 11, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 2140,
                            "Offset": 119504
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
            "UniqueID": 19, 
            "Name": "Spas-12", 
            "Matrix": [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.39441, 0.43018, -0.19927, 1 ], 
            "Children": [ {
              "osg.Node": {
                "UniqueID": 20, 
                "Name": "GeodeMesh.001", 
                "Children": [ {
                  "osg.Geometry": {
                    "UniqueID": 21, 
                    "Name": "Spas-12", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 22, 
                        "Name": "Spas-12", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 27, 
                            "Name": "Spas-12", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.64, 0.64, 0.64, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.24194, 0.24194, 0.24194, 1], 
                            "UserDataContainer": {
                              "UniqueID": 28, 
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
                                "Value": "0.24193549156188965"
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
                                "Value": "COOKTORR"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 24, 
                            "Name": "Texture.001", 
                            "File": "textures/SPAS-12_normal.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 25, 
                            "Name": "Texture", 
                            "File": "textures/SPAS-12_diffuse.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 26, 
                            "Name": "Texture.002", 
                            "File": "textures/SPAS-12_specual.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 23, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_Normal", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "01_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "01_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "02_SpecularIntensity", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "02_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 35, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 261,
                              "Offset": 145184
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
                        "UniqueID": 36, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 8266,
                              "Offset": 145708
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
                        "UniqueID": 30, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4276,
                            "Offset": 162240
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 34, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4276,
                            "Offset": 213552
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 31, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4276,
                            "Offset": 281968
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord1": {
                        "UniqueID": 32, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4276,
                            "Offset": 316176
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord2": {
                        "UniqueID": 33, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4276,
                            "Offset": 350384
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 29, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 4276,
                            "Offset": 384592
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
            "UniqueID": 37, 
            "Name": "Ammorack", 
            "Matrix": [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.06592, 0.08042, 0.01454, 1 ], 
            "Children": [ {
              "osg.Node": {
                "UniqueID": 38, 
                "Name": "GeodeMesh.002", 
                "Children": [ {
                  "osg.Geometry": {
                    "UniqueID": 39, 
                    "Name": "Ammorack", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 40, 
                        "Name": "AmmoRack", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 45, 
                            "Name": "AmmoRack", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.64, 0.64, 0.64, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.29032, 0.29032, 0.29032, 1], 
                            "UserDataContainer": {
                              "UniqueID": 46, 
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
                                "Value": "0.29032260179519653"
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
                                "Value": "COOKTORR"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 42, 
                            "Name": "Texture.004", 
                            "File": "textures/ammo_normal.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 43, 
                            "Name": "Texture.005", 
                            "File": "textures/ammo_diffuse.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 44, 
                            "Name": "Texture.006", 
                            "File": "textures/ammo_specular.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 41, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_Normal", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "01_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "01_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "02_SpecularIntensity", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "02_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 53, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 6,
                              "Offset": 435904
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
                        "UniqueID": 54, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 1242,
                              "Offset": 435916
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
                        "UniqueID": 48, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 697,
                            "Offset": 438400
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 52, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 697,
                            "Offset": 446764
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 49, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 697,
                            "Offset": 457916
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord1": {
                        "UniqueID": 50, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 697,
                            "Offset": 463492
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord2": {
                        "UniqueID": 51, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 697,
                            "Offset": 469068
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 47, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 697,
                            "Offset": 474644
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
            "UniqueID": 55, 
            "Name": "Slugs", 
            "Matrix": [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.06592, 0.08042, 0.06461, 1 ], 
            "Children": [ {
              "osg.Node": {
                "UniqueID": 56, 
                "Name": "GeodeMesh.003", 
                "Children": [ {
                  "osg.Geometry": {
                    "UniqueID": 57, 
                    "Name": "Slugs", 
                    "StateSet": {
                      "osg.StateSet": {
                        "UniqueID": 58, 
                        "Name": "Slug", 
                        "AttributeList": [ {
                          "osg.Material": {
                            "UniqueID": 63, 
                            "Name": "Slug", 
                            "Ambient": [ 0, 0, 0, 1], 
                            "Diffuse": [ 0.64, 0.64, 0.64, 1], 
                            "Emission": [ 0, 0, 0, 1], 
                            "Shininess": 12.5, 
                            "Specular": [ 0.5, 0.5, 0.5, 1], 
                            "UserDataContainer": {
                              "UniqueID": 64, 
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
                                "Value": "COOKTORR"
                              } ]
                            }
                          }
                        } ], 
                        "TextureAttributeList": [ [ {
                          "osg.Texture": {
                            "UniqueID": 60, 
                            "Name": "Texture.007", 
                            "File": "textures/slug_normal.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 61, 
                            "Name": "Texture.008", 
                            "File": "textures/slug_diffuse.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ],
                        [ {
                          "osg.Texture": {
                            "UniqueID": 62, 
                            "Name": "Texture.009", 
                            "File": "textures/slug_specular.jpg", 
                            "MagFilter": "LINEAR", 
                            "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                            "WrapS": "REPEAT", 
                            "WrapT": "REPEAT"
                          }
                        } ] ], 
                        "UserDataContainer": {
                          "UniqueID": 59, 
                          "Values": [ {
                            "Name": "source", 
                            "Value": "blender"
                          },
                          {
                            "Name": "00_Normal", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "00_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "01_DiffuseColor", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "01_BlendType", 
                            "Value": "MIX"
                          },
                          {
                            "Name": "02_SpecularIntensity", 
                            "Value": "1.0"
                          },
                          {
                            "Name": "02_BlendType", 
                            "Value": "MIX"
                          } ]
                        }
                      }
                    }, 
                    "PrimitiveSetList": [ {
                      "DrawElementsUShort": {
                        "UniqueID": 71, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 3,
                              "Offset": 483008
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
                        "UniqueID": 72, 
                        "Indices": {
                          "Array": { 
                            "Uint16Array": { 
                              "File": "model_file.bin",
                              "Size": 1383,
                              "Offset": 483016
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
                        "UniqueID": 66, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 832,
                            "Offset": 485784
                          }
                        }, 
                        "ItemSize": 3, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Tangent": {
                        "UniqueID": 70, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 832,
                            "Offset": 495768
                          }
                        }, 
                        "ItemSize": 4, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord0": {
                        "UniqueID": 67, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 832,
                            "Offset": 509080
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord1": {
                        "UniqueID": 68, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 832,
                            "Offset": 515736
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "TexCoord2": {
                        "UniqueID": 69, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 832,
                            "Offset": 522392
                          }
                        }, 
                        "ItemSize": 2, 
                        "Type": "ARRAY_BUFFER"
                      }, 
                      "Vertex": {
                        "UniqueID": 65, 
                        "Array": { 
                          "Float32Array": { 
                            "File": "model_file.bin",
                            "Size": 832,
                            "Offset": 529048
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