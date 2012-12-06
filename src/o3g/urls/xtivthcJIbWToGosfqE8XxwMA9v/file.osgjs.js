{
  "Generator": "OpenSceneGraph 3.1.3", 
  "Version": 6, 
  "osg.Node": {
    "Children": [ {
      "osg.Node": {
        "UniqueID": 0, 
        "Name": "maya2sketchfab.obj.resolve", 
        "Children": [ {
          "osg.Node": {
            "UniqueID": 1, 
            "Name": "football", 
            "Children": [ {
              "osg.Geometry": {
                "UniqueID": 2, 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 3, 
                    "AttributeList": [ {
                      "osg.Material": {
                        "UniqueID": 7, 
                        "Name": "blinn1SG", 
                        "Ambient": [ 0.3, 0.3, 0.3, 1], 
                        "Diffuse": [ 1, 1, 1, 1], 
                        "Emission": [ 0, 0, 0, 1], 
                        "Shininess": 2.304, 
                        "Specular": [ 0, 0, 0, 1]
                      }
                    } ], 
                    "TextureAttributeList": [ [ {
                      "osg.Texture": {
                        "UniqueID": 5, 
                        "File": "Football_C.jpg", 
                        "MagFilter": "LINEAR", 
                        "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                        "WrapS": "REPEAT", 
                        "WrapT": "REPEAT"
                      }
                    } ],
                    [ {
                      "osg.Texture": {
                        "UniqueID": 6, 
                        "File": "Football_S.jpg", 
                        "MagFilter": "LINEAR", 
                        "MinFilter": "LINEAR_MIPMAP_LINEAR", 
                        "WrapS": "REPEAT", 
                        "WrapT": "REPEAT"
                      }
                    } ] ], 
                    "UserDataContainer": {
                      "UniqueID": 4, 
                      "Values": [ {
                        "Name": "source", 
                        "Value": "wavefront"
                      },
                      {
                        "Name": "ka", 
                        "Value": "[ 0.3, 0.3, 0.3]"
                      },
                      {
                        "Name": "kd", 
                        "Value": "[ 1, 1, 1]"
                      },
                      {
                        "Name": "ks", 
                        "Value": "[ 0, 0, 0]"
                      },
                      {
                        "Name": "ns", 
                        "Value": "18"
                      },
                      {
                        "Name": "sharpness", 
                        "Value": "0"
                      },
                      {
                        "Name": "emissive", 
                        "Value": "[ 0, 0, 0]"
                      },
                      {
                        "Name": "tr", 
                        "Value": "0"
                      },
                      {
                        "Name": "map_kd", 
                        "Value": "0"
                      },
                      {
                        "Name": "map_ka", 
                        "Value": "1"
                      },
                      {
                        "Name": "bump", 
                        "Value": "2"
                      } ]
                    }
                  }
                }, 
                "PrimitiveSetList": [ {
                  "DrawArrays": {
                    "UniqueID": 12, 
                    "Count": 3, 
                    "First": 65533, 
                    "Mode": "TRIANGLES"
                  }
                },
                {
                  "DrawElementsUShort": {
                    "UniqueID": 13, 
                    "Indices": {
                      "Array": { 
                        "Uint16Array": { 
                          "File": "model_file.bin",
                          "Size": 98368,
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
                    "UniqueID": 9, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 196736
                      }
                    }, 
                    "ItemSize": 3, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "Tangent": {
                    "UniqueID": 11, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 983168
                      }
                    }, 
                    "ItemSize": 4, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "TexCoord0": {
                    "UniqueID": 10, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 2031744
                      }
                    }, 
                    "ItemSize": 2, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "Vertex": {
                    "UniqueID": 8, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 2556032
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
                "UniqueID": 14, 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 3
                  }
                }, 
                "PrimitiveSetList": [ {
                  "DrawArrays": {
                    "UniqueID": 19, 
                    "Count": 3, 
                    "First": 0, 
                    "Mode": "TRIANGLES"
                  }
                },
                {
                  "DrawElementsUShort": {
                    "UniqueID": 20, 
                    "Indices": {
                      "Array": { 
                        "Uint16Array": { 
                          "File": "model_file.bin",
                          "Size": 98410,
                          "Offset": 3342464
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
                    "UniqueID": 16, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 3539284
                      }
                    }, 
                    "ItemSize": 3, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "Tangent": {
                    "UniqueID": 18, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 4325716
                      }
                    }, 
                    "ItemSize": 4, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "TexCoord0": {
                    "UniqueID": 17, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 5374292
                      }
                    }, 
                    "ItemSize": 2, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "Vertex": {
                    "UniqueID": 15, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 65536,
                        "Offset": 5898580
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
                "UniqueID": 21, 
                "StateSet": {
                  "osg.StateSet": {
                    "UniqueID": 3
                  }
                }, 
                "PrimitiveSetList": [ {
                  "DrawElementsUShort": {
                    "UniqueID": 26, 
                    "Indices": {
                      "Array": { 
                        "Uint16Array": { 
                          "File": "model_file.bin",
                          "Size": 2218,
                          "Offset": 6685012
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
                    "UniqueID": 23, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 1480,
                        "Offset": 6689448
                      }
                    }, 
                    "ItemSize": 3, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "Tangent": {
                    "UniqueID": 25, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 1480,
                        "Offset": 6707208
                      }
                    }, 
                    "ItemSize": 4, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "TexCoord0": {
                    "UniqueID": 24, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 1480,
                        "Offset": 6730888
                      }
                    }, 
                    "ItemSize": 2, 
                    "Type": "ARRAY_BUFFER"
                  }, 
                  "Vertex": {
                    "UniqueID": 22, 
                    "Array": { 
                      "Float32Array": { 
                        "File": "model_file.bin",
                        "Size": 1480,
                        "Offset": 6742728
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
}