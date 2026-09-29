import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'e3529b2c3aa240859ca2d084258c229e'
                    }
                    'log-ritm-opened': {
                        table: 'sys_script'
                        id: '082ea5fc6dbc42618c226fee6bf02edf'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e1280a38abec4c5594be46b3c444dc49'
                    }
                    'read-sc-req-item': {
                        table: 'sys_scope_privilege'
                        id: '01605d99c707457193664d9fd35ecdde'
                    }
                    'ritm-log-entry-read': {
                        table: 'sys_security_acl'
                        id: '27b51941f7f345208d8345f4325c6339'
                    }
                    'ritm-log-menu': {
                        table: 'sys_app_application'
                        id: '6e45e7a605f649d7a2a2a3194bdfa59b'
                    }
                    'ritm-log-module-entries': {
                        table: 'sys_app_module'
                        id: 'eeedaf6153c7442289f1888a3631021f'
                    }
                    'src_server_business-rules_log-ritm-opened_ts': {
                        table: 'sys_module'
                        id: '54d689c912504e1fbe47a21adbf09da6'
                    }
                    'test-log-ritm-opened': {
                        table: 'sys_atf_test'
                        id: '76ccf64ce8224236a93effad373756aa'
                    }
                    'test-log-ritm-opened-entry-exists': {
                        table: 'sys_atf_step'
                        id: 'e67ced4f52484535a54418441e349743'
                    }
                    'test-log-ritm-opened-insert': {
                        table: 'sys_atf_step'
                        id: '298ea4afd25e4f65876a9e41288391be'
                    }
                    'test-log-ritm-opened-single-entry': {
                        table: 'sys_atf_step'
                        id: '13b36efee98d4c6c8f073dbbcbdc65be'
                    }
                    'test-log-ritm-opened-update': {
                        table: 'sys_atf_step'
                        id: '37f019ad7eb34b16b47777b1b501b98d'
                    }
                    'test-log-ritm-opened-user': {
                        table: 'sys_atf_step'
                        id: '7015175ee2204231a4d9c33c52d4545e'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '03208000b6744580b7f802ed0fe83d87'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'requested_item'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '09a5c40ce1c44d9595455da6cde14779'
                        key: {
                            list_id: {
                                id: 'c5a35197b3ba47fe8dcc5718cdb3aca5'
                                key: {
                                    name: 'x_ritm_log_entry'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0c1018c6e64f4d069ec374e749e12db5'
                        key: {
                            document_key: '7015175ee2204231a4d9c33c52d4545e'
                            variable: '98c44875ffa033008d3f5d9ad53bf1fa'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1f34d95c0d524ed08bbb799db914a604'
                        key: {
                            list_id: {
                                id: 'c5a35197b3ba47fe8dcc5718cdb3aca5'
                                key: {
                                    name: 'x_ritm_log_entry'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'ritm_number'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '23a4eeb8f7f94fd59cd944244766645f'
                        key: {
                            document_key: '7015175ee2204231a4d9c33c52d4545e'
                            variable: '8c07aba5ff6033008d3f5d9ad53bf13b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b16e2deefa34c1690f69a10c97f9279'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'ritm_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3054ff78d8a14a10945a25ab77af5a46'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'opened_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '496240592cbf45dd81f06e66504f9530'
                        key: {
                            document_key: '13b36efee98d4c6c8f073dbbcbdc65be'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4adf28d4bedf4e3296655f5c6cf7d060'
                        key: {
                            document_key: '37f019ad7eb34b16b47777b1b501b98d'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5a30318686654ca9a7bd2af25f2bfe2c'
                        key: {
                            name: 'x_ritm_log_entry'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5fed4802e54f418eb86d53a560793bdc'
                        key: {
                            document_key: '37f019ad7eb34b16b47777b1b501b98d'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '688f2cbb71e542559d8ccf14f6af5c93'
                        key: {
                            document_key: '7015175ee2204231a4d9c33c52d4545e'
                            variable: '6f69fc4aff6433008d3f5d9ad53bf18c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6a48c05c5c4f4f49a3c9333e4d5a09e6'
                        key: {
                            document_key: '298ea4afd25e4f65876a9e41288391be'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c2087a0897f4a7eae310f4184966c88'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6fc522645d9a4aedb02b9a0083c0ed23'
                        key: {
                            document_key: '298ea4afd25e4f65876a9e41288391be'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7621e3611e5c429dae48913131f3d651'
                        key: {
                            name: 'x_ritm_log_entry'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7c0b0b6e0c9e4952926773ffc7c61beb'
                        key: {
                            document_key: '7015175ee2204231a4d9c33c52d4545e'
                            variable: 'ff06ab840f20101091d0f00c97767e6d'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83d2a26c2e6f4082a2142b76e50fbece'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'opened_by'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '83ed681e93b24348b76150fc508c4594'
                        key: {
                            document_key: '7015175ee2204231a4d9c33c52d4545e'
                            variable: '1985e0ceff2433008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '85de28df0cf2490b96f55d646683128d'
                        key: {
                            sys_security_acl: '27b51941f7f345208d8345f4325c6339'
                            sys_user_role: {
                                id: 'f6ddcaaeda644171badd37d0eda9fe19'
                                key: {
                                    name: 'x_ritm_log.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '914440ef56b248d7946b2635f2f60d83'
                        key: {
                            document_key: 'e67ced4f52484535a54418441e349743'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '93160afcc84b4765beb8ff164fe48a57'
                        key: {
                            document_key: 'e67ced4f52484535a54418441e349743'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '952205e10b1b4959b9e60d93f9387875'
                        key: {
                            document_key: '7015175ee2204231a4d9c33c52d4545e'
                            variable: 'b27b2b29ff6033008d3f5d9ad53bf164'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '98ac8a75a34745e49e955f3fc76e2730'
                        key: {
                            id: 'e67ced4f52484535a54418441e349743'
                            table: 'var__m_atf_input_variable_2d82e3c7531400109e02ddeeff7b12a7'
                            field: 'field_values'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9ddce2928264452e8f05bdb8c83baa55'
                        key: {
                            list_id: {
                                id: 'c5a35197b3ba47fe8dcc5718cdb3aca5'
                                key: {
                                    name: 'x_ritm_log_entry'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requested_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a62beed54487406a97d2d0c63edba59e'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b00f1d27166247de9cef3e8f03303dc4'
                        key: {
                            document_key: '37f019ad7eb34b16b47777b1b501b98d'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b44f77ceaf6b4553bd8bce7cace06c2e'
                        key: {
                            document_key: '37f019ad7eb34b16b47777b1b501b98d'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b5dffa6844b64bf392d006387a85ba4f'
                        key: {
                            document_key: '13b36efee98d4c6c8f073dbbcbdc65be'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'c5a35197b3ba47fe8dcc5718cdb3aca5'
                        key: {
                            name: 'x_ritm_log_entry'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c63c8bdbdcc4439da49f46d4aedde168'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'requested_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c7fa81439385425d94a5aaa4b68f60d6'
                        key: {
                            id: '37f019ad7eb34b16b47777b1b501b98d'
                            table: 'var__m_atf_input_variable_17a72288df60220062fe6c7a4df26397'
                            field: 'record_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c9a768d1e6294346b33fafeb5702362f'
                        key: {
                            document_key: 'e67ced4f52484535a54418441e349743'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cd39021729e140929641ac06b8ce9eae'
                        key: {
                            document_key: '298ea4afd25e4f65876a9e41288391be'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf203eb9a05148a6bb147b8ccab22634'
                        key: {
                            document_key: 'e67ced4f52484535a54418441e349743'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd86cb25d64b54c1486fb5dc0f760e69e'
                        key: {
                            list_id: {
                                id: 'c5a35197b3ba47fe8dcc5718cdb3aca5'
                                key: {
                                    name: 'x_ritm_log_entry'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'opened_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e08c531667c245dfa8b846a3c903ac62'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e780429d7b384bcd8d7064855208ce03'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'ritm_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f12f492deae44b3d9da34b9e233e3c27'
                        key: {
                            name: 'x_ritm_log_entry'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f6ddcaaeda644171badd37d0eda9fe19'
                        key: {
                            name: 'x_ritm_log.viewer'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f84d25c96e784c97abbfaad933bce38c'
                        key: {
                            document_key: '7015175ee2204231a4d9c33c52d4545e'
                            variable: '1778a7480f20101091d0f00c97767e03'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f9a634f34d184badbf2574c4529c2d75'
                        key: {
                            id: '13b36efee98d4c6c8f073dbbcbdc65be'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fb503b1277c14030a14b9a7c0cfd2cd3'
                        key: {
                            document_key: '298ea4afd25e4f65876a9e41288391be'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fdec5833da4e4792b23fbe33bb8eb918'
                        key: {
                            document_key: '37f019ad7eb34b16b47777b1b501b98d'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                ]
            }
        }
    }
}
