import { Injectable } from "@angular/core";
import { ExplainPlanObj } from "../shared/model/explain-plan-obj";




@Injectable({
  providedIn: "root",
})
export class ExplainObjService {
  private _explain_plan: ExplainPlanObj = {
		"version": "1",
		"signature": "PostgreSQL JDBC Driver",
		"date": "2021-03-29T09:14:08.638225",
		"sql": "SELECT SUBSTR(EM.empresa_nombre,1,3) AS empresa, CONCAT(LPAD(EM.empresa_codigocontable,2,\u00270\u0027), LPAD(cc.cencos_digito,3,\u00270\u0027), CHR(45), coalesce(F.factura_numerodocumento::bigint,F.factura_cencoscodigo)) AS factura, F.factura_codigo as factura_general, F.factura_fechacreacion::date AS fecha, C.cliente_documento AS nit, REPLACE(REPLACE(REPLACE(REPLACE(fn_nombre_completo(C.cliente_nombre1,C.cliente_nombre2,C.cliente_apellido1,C.cliente_apellido2),\u0027,\u0027,\u0027/\u0027),\u0027.\u0027,\u0027\u0027),CHR(10),\u0027\u0027),CHR(13),\u0027\u0027) AS cliente,CD.ciudad_nombre AS ciudad_pago, round((SELECT SUM(iterem_peso)::double precision FROM tb_itemremesa IR2 INNER JOIN tb_itemfactura IF2 ON (IF2.remesa_codigo \u003d IR2.remesa_codigo) WHERE IF2.factura_codigo \u003d F.factura_codigo)) AS kilo, round(FC.factura_bruto) AS factura_bruto,round(FC.factura_impuesto) AS factura_impuesto,round(FC.factura_total) AS total,ES.estado_nombre AS estado, \u0027\u0027 AS observacionnovedad, (SELECT ind.notadebito_codigo FROM tb_itemnotadebito ind where ind.itemnotadebito_numero\u003dF.factura_codigo limit 1) as notadebito_codigo, (SELECT ind.itemnotadebito_valor FROM tb_itemnotadebito ind where ind.itemnotadebito_numero\u003dF.factura_codigo limit 1) as itemnotadebito_valor, (SELECT DISTINCT LPAD(empn.empresa_codigocontable,2,\u00270\u0027)||LPAD(ccn.cencos_digito,3,\u00270\u0027)||\u0027-\u0027||NC.notcon_cencoscodigo||\u0027(\u0027||NC.notcon_codigo||\u0027)\u0027 as nota FROM tb_notacontabilidad NC LEFT JOIN tb_centrocosto ccn ON (ccn.cencos_codigo\u003dNC.cencos_codigo) LEFT JOIN tb_empresa empn ON (ccn.empresa_codigo\u003dempn.empresa_codigo) JOIN tb_itemnotacontabilidad INC ON (INC.notcon_codigo \u003d NC.notcon_codigo AND INC.itenotcon_documento \u003d F.factura_codigo::Text) WHERE NC.tipnotcon_codigo \u003d 2 AND NC.documento_codigo \u003d 7 AND NC.estado_codigo \u003c\u003e 145 LIMIT 1) AS notacredito, (SELECT DISTINCT NCC.notcon_valor FROM tb_notacontabilidad NC JOIN tb_itemnotacontabilidad INC ON (INC.notcon_codigo \u003d NC.notcon_codigo AND INC.itenotcon_documento \u003d F.factura_codigo::Text) JOIN tb_notacontabilidadcambio NCC ON (NCC.notcon_codigo \u003d NC.notcon_codigo AND NCC.moneda_codigo\u003d 1) WHERE NC.tipnotcon_codigo \u003d 2 AND NC.documento_codigo \u003d 7 AND NC.estado_codigo \u003c\u003e 145 LIMIT 1 ) AS vlrnota, ci.coming_codigo AS ingreso, ci.coming_fechacreacion AS fechaingreso, ui.usuario_nombre as usuario_ingreso,0 AS retefuente, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00275305\u0027)) as pronto_pago, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00272380\u0027)) as notas_credito, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00271380\u0027)) as deudores_varios, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00272805\u0027)) as anticipo_clientes, round(f.factura_ica) as ica, round(f.factura_retefuente) as rete, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00271105\u0027)) as caja, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00275315\u0027)) as impuestos_asumidos, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00271110\u0027)) as banco, round(fn_valor_cartera_cuenta(F.factura_codigo,1,\u00271120\u0027)) as banco_ahorros, \u0027\u0027 AS clase, substr(cc.cencos_nombre,1,12) as centrocosto,0 as kilos, u.usuario_nombre AS usuario, purgar_text(substr(REPLACE(REPLACE(REPLACE(REPLACE(case when F.factura_observacion\u003c\u003enull THEN F.factura_observacion else \u0027\u0027 END ,\u0027,\u0027,\u0027/\u0027),\u0027.\u0027,\u0027\u0027),CHR(10),\u0027\u0027),CHR(13),\u0027\u0027),1,80)) as factura_observacion, purgar_text(substr(REPLACE(REPLACE(REPLACE(REPLACE(if.itefac_descripcion,\u0027,\u0027,\u0027/\u0027),\u0027.\u0027,\u0027\u0027),CHR(10),\u0027\u0027),CHR(13),\u0027\u0027),1,80)) as descripcion FROM tb_factura F LEFT JOIN tb_itemfactura IF ON F.factura_codigo \u003d IF.factura_codigo LEFT JOIN tb_facturacambio FC ON (F.factura_codigo\u003dFC.factura_codigo AND FC.moneda_codigo\u003d 1) INNER JOIN tb_cliente C ON F.cliente_codigo \u003d C.cliente_codigo LEFT JOIN tb_ciudad CD ON F.ciudad_codigo_pago \u003d CD.ciudad_codigo INNER JOIN tb_empresa EM ON F.empresa_codigo \u003d EM.empresa_codigo INNER JOIN tb_centrocosto cc ON F.cencos_codigo \u003d cc.cencos_codigo INNER JOIN tb_estado ES ON F.estado_codigo \u003d ES.estado_codigo LEFT JOIN tb_itemcomprobanteingreso as ici ON ( ici.itecoming_documento\u003dF.factura_codigo::Text AND ici.documento_codigo\u003d7) LEFT JOIN tb_comprobanteingreso ci ON (ci.coming_codigo\u003dici.coming_codigo) LEFT JOIN tb_usuario u ON (u.usuario_codigo \u003d f.usuario_codigo) LEFT JOIN tb_usuario ui ON (ui.usuario_codigo \u003d ci.usuario_codigo) WHERE TRUE AND ci.coming_fechacreacion between \u00272021-03-29\u0027 AND \u00272021-03-29\u0027 AND F.empresa_codigo\u003d 1 GROUP BY EM.empresa_nombre, F.factura_codigo, F.factura_fechacreacion, C.cliente_documento, C.cliente_nombre1, C.cliente_nombre2, C.cliente_apellido1, cc.cencos_nombre, C.cliente_apellido2, CD.ciudad_nombre,FC.factura_bruto,FC.factura_impuesto,FC.factura_total,ES.estado_nombre,ci.coming_fechacreacion, ci.coming_codigo,f.estado_codigo,u.usuario_nombre,ui.usuario_nombre, F.factura_observacion, if.itefac_descripcion, EM.empresa_codigocontable, cc.cencos_digito, f.factura_ica,f.factura_retefuente ORDER BY cc.cencos_nombre, cliente, f.factura_codigo",
		"root": [
			{
				"name": "",
				"kind": "Result",
				"type": "Result",
				"cond": "",
				"desc": "",
				"attributes": [
					{
						"Parallel-Aware": "false"
					},
					{
						"Startup-Cost": "28934.95"
					},
					{
						"Total-Cost": "32729.53"
					},
					{
						"Plan-Rows": "34"
					},
					{
						"Plan-Width": "778"
					}
				],
				"child": [
					{
						"name": "",
						"kind": "Sort",
						"type": "Sort",
						"cond": "",
						"desc": "",
						"attributes": [
							{
								"Parent-Relationship": "Outer"
							},
							{
								"Parallel-Aware": "false"
							},
							{
								"Startup-Cost": "28934.95"
							},
							{
								"Total-Cost": "28935.03"
							},
							{
								"Plan-Rows": "34"
							},
							{
								"Plan-Width": "586"
							},
							{
								"Sort-Key": "\n            cc.cencos_nombre\n            (replace(replace(replace(replace(fn_nombre_completo((c.cliente_nombre1)::text, (c.cliente_nombre2)::text, (c.cliente_apellido1)::text, (c.cliente_apellido2)::text), \u0027,\u0027::text, \u0027/\u0027::text), \u0027.\u0027::text, \u0027\u0027::text), \u0027\n\u0027::text, \u0027\u0027::text), \u0027\r\u0027::text, \u0027\u0027::text))\n            f.factura_codigo\n          "
							}
						],
						"child": [
							{
								"name": "",
								"kind": "Group",
								"type": "Group",
								"cond": "",
								"desc": "",
								"attributes": [
									{
										"Parent-Relationship": "Outer"
									},
									{
										"Parallel-Aware": "false"
									},
									{
										"Startup-Cost": "28922.27"
									},
									{
										"Total-Cost": "28934.08"
									},
									{
										"Plan-Rows": "34"
									},
									{
										"Plan-Width": "586"
									},
									{
										"Group-Key": "\n                em.empresa_nombre\n                f.factura_codigo\n                c.cliente_documento\n                c.cliente_nombre1\n                c.cliente_nombre2\n                c.cliente_apellido1\n                cc.cencos_nombre\n                c.cliente_apellido2\n                cd.ciudad_nombre\n                fc.factura_bruto\n                fc.factura_impuesto\n                fc.factura_total\n                es.estado_nombre\n                ci.coming_codigo\n                u.usuario_nombre\n                ui.usuario_nombre\n                if.itefac_descripcion\n                em.empresa_codigocontable\n                cc.cencos_digito\n              "
									}
								],
								"child": [
									{
										"name": "",
										"kind": "Sort",
										"type": "Sort",
										"cond": "",
										"desc": "",
										"attributes": [
											{
												"Parent-Relationship": "Outer"
											},
											{
												"Parallel-Aware": "false"
											},
											{
												"Startup-Cost": "28922.27"
											},
											{
												"Total-Cost": "28922.35"
											},
											{
												"Plan-Rows": "34"
											},
											{
												"Plan-Width": "355"
											},
											{
												"Sort-Key": "\n                    em.empresa_nombre\n                    f.factura_codigo\n                    c.cliente_documento\n                    c.cliente_nombre1\n                    c.cliente_nombre2\n                    c.cliente_apellido1\n                    cc.cencos_nombre\n                    c.cliente_apellido2\n                    cd.ciudad_nombre\n                    fc.factura_bruto\n                    fc.factura_impuesto\n                    fc.factura_total\n                    es.estado_nombre\n                    ci.coming_codigo\n                    u.usuario_nombre\n                    ui.usuario_nombre\n                    if.itefac_descripcion\n                    em.empresa_codigocontable\n                    cc.cencos_digito\n                  "
											}
										],
										"child": [
											{
												"name": "",
												"kind": "Hash",
												"type": "Hash Join",
												"cond": "((f.factura_codigo)::text \u003d (ici.itecoming_documento)::text)",
												"desc": "",
												"attributes": [
													{
														"Parent-Relationship": "Outer"
													},
													{
														"Parallel-Aware": "false"
													},
													{
														"Join-Type": "Inner"
													},
													{
														"Startup-Cost": "15586.77"
													},
													{
														"Total-Cost": "28921.40"
													},
													{
														"Plan-Rows": "34"
													},
													{
														"Plan-Width": "355"
													},
													{
														"Inner-Unique": "false"
													},
													{
														"Hash-Cond": "((f.factura_codigo)::text \u003d (ici.itecoming_documento)::text)"
													}
												],
												"child": [
													{
														"name": "",
														"kind": "Hash",
														"type": "Hash Join",
														"cond": "(f.usuario_codigo \u003d u.usuario_codigo)",
														"desc": "",
														"attributes": [
															{
																"Parent-Relationship": "Outer"
															},
															{
																"Parallel-Aware": "false"
															},
															{
																"Join-Type": "Left"
															},
															{
																"Startup-Cost": "15518.75"
															},
															{
																"Total-Cost": "28264.58"
															},
															{
																"Plan-Rows": "94154"
															},
															{
																"Plan-Width": "322"
															},
															{
																"Inner-Unique": "true"
															},
															{
																"Hash-Cond": "(f.usuario_codigo \u003d u.usuario_codigo)"
															}
														],
														"child": [
															{
																"name": "",
																"kind": "Hash",
																"type": "Hash Join",
																"cond": "(f.estado_codigo \u003d es.estado_codigo)",
																"desc": "",
																"attributes": [
																	{
																		"Parent-Relationship": "Outer"
																	},
																	{
																		"Parallel-Aware": "false"
																	},
																	{
																		"Join-Type": "Inner"
																	},
																	{
																		"Startup-Cost": "15342.10"
																	},
																	{
																		"Total-Cost": "27840.28"
																	},
																	{
																		"Plan-Rows": "94154"
																	},
																	{
																		"Plan-Width": "309"
																	},
																	{
																		"Inner-Unique": "true"
																	},
																	{
																		"Hash-Cond": "(f.estado_codigo \u003d es.estado_codigo)"
																	}
																],
																"child": [
																	{
																		"name": "",
																		"kind": "Hash",
																		"type": "Hash Join",
																		"cond": "(f.cencos_codigo \u003d cc.cencos_codigo)",
																		"desc": "",
																		"attributes": [
																			{
																				"Parent-Relationship": "Outer"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Join-Type": "Inner"
																			},
																			{
																				"Startup-Cost": "15331.37"
																			},
																			{
																				"Total-Cost": "27578.89"
																			},
																			{
																				"Plan-Rows": "94154"
																			},
																			{
																				"Plan-Width": "300"
																			},
																			{
																				"Inner-Unique": "true"
																			},
																			{
																				"Hash-Cond": "(f.cencos_codigo \u003d cc.cencos_codigo)"
																			}
																		],
																		"child": [
																			{
																				"name": "",
																				"kind": "Join",
																				"type": "Nested Loop",
																				"cond": "",
																				"desc": "",
																				"attributes": [
																					{
																						"Parent-Relationship": "Outer"
																					},
																					{
																						"Parallel-Aware": "false"
																					},
																					{
																						"Join-Type": "Inner"
																					},
																					{
																						"Startup-Cost": "15316.44"
																					},
																					{
																						"Total-Cost": "27312.03"
																					},
																					{
																						"Plan-Rows": "94154"
																					},
																					{
																						"Plan-Width": "282"
																					},
																					{
																						"Inner-Unique": "false"
																					}
																				],
																				"child": [
																					{
																						"name": "tb_empresa",
																						"kind": "Node",
																						"type": "Seq Scan",
																						"cond": "(empresa_codigo \u003d 1)",
																						"desc": "(empresa_codigo \u003d 1)",
																						"attributes": [
																							{
																								"Parent-Relationship": "Outer"
																							},
																							{
																								"Parallel-Aware": "false"
																							},
																							{
																								"Relation-Name": "tb_empresa"
																							},
																							{
																								"Alias": "em"
																							},
																							{
																								"Startup-Cost": "0.00"
																							},
																							{
																								"Total-Cost": "2.17"
																							},
																							{
																								"Plan-Rows": "1"
																							},
																							{
																								"Plan-Width": "29"
																							},
																							{
																								"Filter": "(empresa_codigo \u003d 1)"
																							}
																						]
																					},
																					{
																						"name": "",
																						"kind": "Hash",
																						"type": "Hash Join",
																						"cond": "(f.ciudad_codigo_pago \u003d cd.ciudad_codigo)",
																						"desc": "",
																						"attributes": [
																							{
																								"Parent-Relationship": "Inner"
																							},
																							{
																								"Parallel-Aware": "false"
																							},
																							{
																								"Join-Type": "Left"
																							},
																							{
																								"Startup-Cost": "15316.44"
																							},
																							{
																								"Total-Cost": "26368.31"
																							},
																							{
																								"Plan-Rows": "94154"
																							},
																							{
																								"Plan-Width": "269"
																							},
																							{
																								"Inner-Unique": "true"
																							},
																							{
																								"Hash-Cond": "(f.ciudad_codigo_pago \u003d cd.ciudad_codigo)"
																							}
																						],
																						"child": [
																							{
																								"name": "",
																								"kind": "Hash",
																								"type": "Hash Join",
																								"cond": "(f.cliente_codigo \u003d c.cliente_codigo)",
																								"desc": "",
																								"attributes": [
																									{
																										"Parent-Relationship": "Outer"
																									},
																									{
																										"Parallel-Aware": "false"
																									},
																									{
																										"Join-Type": "Inner"
																									},
																									{
																										"Startup-Cost": "14932.00"
																									},
																									{
																										"Total-Cost": "25736.62"
																									},
																									{
																										"Plan-Rows": "94154"
																									},
																									{
																										"Plan-Width": "266"
																									},
																									{
																										"Inner-Unique": "true"
																									},
																									{
																										"Hash-Cond": "(f.cliente_codigo \u003d c.cliente_codigo)"
																									}
																								],
																								"child": [
																									{
																										"name": "",
																										"kind": "Hash",
																										"type": "Hash Join",
																										"cond": "(if.factura_codigo \u003d f.factura_codigo)",
																										"desc": "",
																										"attributes": [
																											{
																												"Parent-Relationship": "Outer"
																											},
																											{
																												"Parallel-Aware": "false"
																											},
																											{
																												"Join-Type": "Right"
																											},
																											{
																												"Startup-Cost": "14899.97"
																											},
																											{
																												"Total-Cost": "25454.49"
																											},
																											{
																												"Plan-Rows": "94154"
																											},
																											{
																												"Plan-Width": "238"
																											},
																											{
																												"Inner-Unique": "false"
																											},
																											{
																												"Hash-Cond": "(if.factura_codigo \u003d f.factura_codigo)"
																											}
																										],
																										"child": [
																											{
																												"name": "tb_itemfactura",
																												"kind": "Node",
																												"type": "Seq Scan",
																												"cond": "",
																												"desc": "",
																												"attributes": [
																													{
																														"Parent-Relationship": "Outer"
																													},
																													{
																														"Parallel-Aware": "false"
																													},
																													{
																														"Relation-Name": "tb_itemfactura"
																													},
																													{
																														"Alias": "if"
																													},
																													{
																														"Startup-Cost": "0.00"
																													},
																													{
																														"Total-Cost": "4170.56"
																													},
																													{
																														"Plan-Rows": "97256"
																													},
																													{
																														"Plan-Width": "123"
																													}
																												]
																											},
																											{
																												"name": "",
																												"kind": "Hash",
																												"type": "Hash",
																												"cond": "",
																												"desc": "",
																												"attributes": [
																													{
																														"Parent-Relationship": "Inner"
																													},
																													{
																														"Parallel-Aware": "false"
																													},
																													{
																														"Startup-Cost": "13054.46"
																													},
																													{
																														"Total-Cost": "13054.46"
																													},
																													{
																														"Plan-Rows": "59401"
																													},
																													{
																														"Plan-Width": "123"
																													}
																												],
																												"child": [
																													{
																														"name": "",
																														"kind": "Hash",
																														"type": "Hash Join",
																														"cond": "(fc.factura_codigo \u003d f.factura_codigo)",
																														"desc": "",
																														"attributes": [
																															{
																																"Parent-Relationship": "Outer"
																															},
																															{
																																"Parallel-Aware": "false"
																															},
																															{
																																"Join-Type": "Right"
																															},
																															{
																																"Startup-Cost": "5889.49"
																															},
																															{
																																"Total-Cost": "13054.46"
																															},
																															{
																																"Plan-Rows": "59401"
																															},
																															{
																																"Plan-Width": "123"
																															},
																															{
																																"Inner-Unique": "true"
																															},
																															{
																																"Hash-Cond": "(fc.factura_codigo \u003d f.factura_codigo)"
																															}
																														],
																														"child": [
																															{
																																"name": "tb_facturacambio",
																																"kind": "Node",
																																"type": "Seq Scan",
																																"cond": "(moneda_codigo \u003d 1)",
																																"desc": "(moneda_codigo \u003d 1)",
																																"attributes": [
																																	{
																																		"Parent-Relationship": "Outer"
																																	},
																																	{
																																		"Parallel-Aware": "false"
																																	},
																																	{
																																		"Relation-Name": "tb_facturacambio"
																																	},
																																	{
																																		"Alias": "fc"
																																	},
																																	{
																																		"Startup-Cost": "0.00"
																																	},
																																	{
																																		"Total-Cost": "5256.34"
																																	},
																																	{
																																		"Plan-Rows": "60047"
																																	},
																																	{
																																		"Plan-Width": "32"
																																	},
																																	{
																																		"Filter": "(moneda_codigo \u003d 1)"
																																	}
																																]
																															},
																															{
																																"name": "",
																																"kind": "Hash",
																																"type": "Hash",
																																"cond": "",
																																"desc": "",
																																"attributes": [
																																	{
																																		"Parent-Relationship": "Inner"
																																	},
																																	{
																																		"Parallel-Aware": "false"
																																	},
																																	{
																																		"Startup-Cost": "4217.98"
																																	},
																																	{
																																		"Total-Cost": "4217.98"
																																	},
																																	{
																																		"Plan-Rows": "59401"
																																	},
																																	{
																																		"Plan-Width": "99"
																																	}
																																],
																																"child": [
																																	{
																																		"name": "tb_factura",
																																		"kind": "Node",
																																		"type": "Seq Scan",
																																		"cond": "(empresa_codigo \u003d 1)",
																																		"desc": "(empresa_codigo \u003d 1)",
																																		"attributes": [
																																			{
																																				"Parent-Relationship": "Outer"
																																			},
																																			{
																																				"Parallel-Aware": "false"
																																			},
																																			{
																																				"Relation-Name": "tb_factura"
																																			},
																																			{
																																				"Alias": "f"
																																			},
																																			{
																																				"Startup-Cost": "0.00"
																																			},
																																			{
																																				"Total-Cost": "4217.98"
																																			},
																																			{
																																				"Plan-Rows": "59401"
																																			},
																																			{
																																				"Plan-Width": "99"
																																			},
																																			{
																																				"Filter": "(empresa_codigo \u003d 1)"
																																			}
																																		]
																																	}
																																]
																															}
																														]
																													}
																												]
																											}
																										]
																									},
																									{
																										"name": "",
																										"kind": "Hash",
																										"type": "Hash",
																										"cond": "",
																										"desc": "",
																										"attributes": [
																											{
																												"Parent-Relationship": "Inner"
																											},
																											{
																												"Parallel-Aware": "false"
																											},
																											{
																												"Startup-Cost": "27.57"
																											},
																											{
																												"Total-Cost": "27.57"
																											},
																											{
																												"Plan-Rows": "357"
																											},
																											{
																												"Plan-Width": "44"
																											}
																										],
																										"child": [
																											{
																												"name": "tb_cliente",
																												"kind": "Node",
																												"type": "Seq Scan",
																												"cond": "",
																												"desc": "",
																												"attributes": [
																													{
																														"Parent-Relationship": "Outer"
																													},
																													{
																														"Parallel-Aware": "false"
																													},
																													{
																														"Relation-Name": "tb_cliente"
																													},
																													{
																														"Alias": "c"
																													},
																													{
																														"Startup-Cost": "0.00"
																													},
																													{
																														"Total-Cost": "27.57"
																													},
																													{
																														"Plan-Rows": "357"
																													},
																													{
																														"Plan-Width": "44"
																													}
																												]
																											}
																										]
																									}
																								]
																							},
																							{
																								"name": "",
																								"kind": "Hash",
																								"type": "Hash",
																								"cond": "",
																								"desc": "",
																								"attributes": [
																									{
																										"Parent-Relationship": "Inner"
																									},
																									{
																										"Parallel-Aware": "false"
																									},
																									{
																										"Startup-Cost": "253.64"
																									},
																									{
																										"Total-Cost": "253.64"
																									},
																									{
																										"Plan-Rows": "10464"
																									},
																									{
																										"Plan-Width": "19"
																									}
																								],
																								"child": [
																									{
																										"name": "tb_ciudad",
																										"kind": "Node",
																										"type": "Seq Scan",
																										"cond": "",
																										"desc": "",
																										"attributes": [
																											{
																												"Parent-Relationship": "Outer"
																											},
																											{
																												"Parallel-Aware": "false"
																											},
																											{
																												"Relation-Name": "tb_ciudad"
																											},
																											{
																												"Alias": "cd"
																											},
																											{
																												"Startup-Cost": "0.00"
																											},
																											{
																												"Total-Cost": "253.64"
																											},
																											{
																												"Plan-Rows": "10464"
																											},
																											{
																												"Plan-Width": "19"
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			},
																			{
																				"name": "",
																				"kind": "Hash",
																				"type": "Hash",
																				"cond": "",
																				"desc": "",
																				"attributes": [
																					{
																						"Parent-Relationship": "Inner"
																					},
																					{
																						"Parallel-Aware": "false"
																					},
																					{
																						"Startup-Cost": "12.19"
																					},
																					{
																						"Total-Cost": "12.19"
																					},
																					{
																						"Plan-Rows": "219"
																					},
																					{
																						"Plan-Width": "34"
																					}
																				],
																				"child": [
																					{
																						"name": "tb_centrocosto",
																						"kind": "Node",
																						"type": "Seq Scan",
																						"cond": "",
																						"desc": "",
																						"attributes": [
																							{
																								"Parent-Relationship": "Outer"
																							},
																							{
																								"Parallel-Aware": "false"
																							},
																							{
																								"Relation-Name": "tb_centrocosto"
																							},
																							{
																								"Alias": "cc"
																							},
																							{
																								"Startup-Cost": "0.00"
																							},
																							{
																								"Total-Cost": "12.19"
																							},
																							{
																								"Plan-Rows": "219"
																							},
																							{
																								"Plan-Width": "34"
																							}
																						]
																					}
																				]
																			}
																		]
																	},
																	{
																		"name": "",
																		"kind": "Hash",
																		"type": "Hash",
																		"cond": "",
																		"desc": "",
																		"attributes": [
																			{
																				"Parent-Relationship": "Inner"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Startup-Cost": "6.99"
																			},
																			{
																				"Total-Cost": "6.99"
																			},
																			{
																				"Plan-Rows": "299"
																			},
																			{
																				"Plan-Width": "17"
																			}
																		],
																		"child": [
																			{
																				"name": "tb_estado",
																				"kind": "Node",
																				"type": "Seq Scan",
																				"cond": "",
																				"desc": "",
																				"attributes": [
																					{
																						"Parent-Relationship": "Outer"
																					},
																					{
																						"Parallel-Aware": "false"
																					},
																					{
																						"Relation-Name": "tb_estado"
																					},
																					{
																						"Alias": "es"
																					},
																					{
																						"Startup-Cost": "0.00"
																					},
																					{
																						"Total-Cost": "6.99"
																					},
																					{
																						"Plan-Rows": "299"
																					},
																					{
																						"Plan-Width": "17"
																					}
																				]
																			}
																		]
																	}
																]
															},
															{
																"name": "",
																"kind": "Hash",
																"type": "Hash",
																"cond": "",
																"desc": "",
																"attributes": [
																	{
																		"Parent-Relationship": "Inner"
																	},
																	{
																		"Parallel-Aware": "false"
																	},
																	{
																		"Startup-Cost": "150.18"
																	},
																	{
																		"Total-Cost": "150.18"
																	},
																	{
																		"Plan-Rows": "2118"
																	},
																	{
																		"Plan-Width": "29"
																	}
																],
																"child": [
																	{
																		"name": "tb_usuario",
																		"kind": "Node",
																		"type": "Seq Scan",
																		"cond": "",
																		"desc": "",
																		"attributes": [
																			{
																				"Parent-Relationship": "Outer"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Relation-Name": "tb_usuario"
																			},
																			{
																				"Alias": "u"
																			},
																			{
																				"Startup-Cost": "0.00"
																			},
																			{
																				"Total-Cost": "150.18"
																			},
																			{
																				"Plan-Rows": "2118"
																			},
																			{
																				"Plan-Width": "29"
																			}
																		]
																	}
																]
															}
														]
													},
													{
														"name": "",
														"kind": "Hash",
														"type": "Hash",
														"cond": "",
														"desc": "",
														"attributes": [
															{
																"Parent-Relationship": "Inner"
															},
															{
																"Parallel-Aware": "false"
															},
															{
																"Startup-Cost": "67.78"
															},
															{
																"Total-Cost": "67.78"
															},
															{
																"Plan-Rows": "19"
															},
															{
																"Plan-Width": "38"
															}
														],
														"child": [
															{
																"name": "",
																"kind": "Join",
																"type": "Nested Loop",
																"cond": "",
																"desc": "",
																"attributes": [
																	{
																		"Parent-Relationship": "Outer"
																	},
																	{
																		"Parallel-Aware": "false"
																	},
																	{
																		"Join-Type": "Inner"
																	},
																	{
																		"Startup-Cost": "0.98"
																	},
																	{
																		"Total-Cost": "67.78"
																	},
																	{
																		"Plan-Rows": "19"
																	},
																	{
																		"Plan-Width": "38"
																	},
																	{
																		"Inner-Unique": "false"
																	}
																],
																"child": [
																	{
																		"name": "",
																		"kind": "Join",
																		"type": "Nested Loop",
																		"cond": "",
																		"desc": "",
																		"attributes": [
																			{
																				"Parent-Relationship": "Outer"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Join-Type": "Left"
																			},
																			{
																				"Startup-Cost": "0.56"
																			},
																			{
																				"Total-Cost": "16.61"
																			},
																			{
																				"Plan-Rows": "1"
																			},
																			{
																				"Plan-Width": "33"
																			},
																			{
																				"Inner-Unique": "true"
																			}
																		],
																		"child": [
																			{
																				"name": "tb_comprobanteingreso",
																				"kind": "Index scan",
																				"type": "Index Scan",
																				"cond": "((coming_fechacreacion \u003e\u003d \u00272021-03-29\u0027::date)\nand (coming_fechacreacion \u003c\u003d \u00272021-03-29\u0027::date))",
																				"desc": "",
																				"attributes": [
																					{
																						"Parent-Relationship": "Outer"
																					},
																					{
																						"Parallel-Aware": "false"
																					},
																					{
																						"Scan-Direction": "Forward"
																					},
																					{
																						"Index-Name": "tb_comprobanteingreso_coming_fechacreacion_idx"
																					},
																					{
																						"Relation-Name": "tb_comprobanteingreso"
																					},
																					{
																						"Alias": "ci"
																					},
																					{
																						"Startup-Cost": "0.28"
																					},
																					{
																						"Total-Cost": "8.30"
																					},
																					{
																						"Plan-Rows": "1"
																					},
																					{
																						"Plan-Width": "20"
																					},
																					{
																						"Index-Cond": "((coming_fechacreacion \u003e\u003d \u00272021-03-29\u0027::date) AND (coming_fechacreacion \u003c\u003d \u00272021-03-29\u0027::date))"
																					}
																				]
																			},
																			{
																				"name": "tb_usuario",
																				"kind": "Index scan",
																				"type": "Index Scan",
																				"cond": "(usuario_codigo \u003d ci.usuario_codigo)",
																				"desc": "",
																				"attributes": [
																					{
																						"Parent-Relationship": "Inner"
																					},
																					{
																						"Parallel-Aware": "false"
																					},
																					{
																						"Scan-Direction": "Forward"
																					},
																					{
																						"Index-Name": "fk_tb_paginaslog_usuario_codigo"
																					},
																					{
																						"Relation-Name": "tb_usuario"
																					},
																					{
																						"Alias": "ui"
																					},
																					{
																						"Startup-Cost": "0.28"
																					},
																					{
																						"Total-Cost": "8.30"
																					},
																					{
																						"Plan-Rows": "1"
																					},
																					{
																						"Plan-Width": "29"
																					},
																					{
																						"Index-Cond": "(usuario_codigo \u003d ci.usuario_codigo)"
																					}
																				]
																			}
																		]
																	},
																	{
																		"name": "tb_itemcomprobanteingreso",
																		"kind": "Index scan",
																		"type": "Index Scan",
																		"cond": "(coming_codigo \u003d ci.coming_codigo)",
																		"desc": "(documento_codigo \u003d 7)",
																		"attributes": [
																			{
																				"Parent-Relationship": "Inner"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Scan-Direction": "Forward"
																			},
																			{
																				"Index-Name": "tb_itemcomprobanteingres_coming_codigo_itecoming__e9e6fc04_uniq"
																			},
																			{
																				"Relation-Name": "tb_itemcomprobanteingreso"
																			},
																			{
																				"Alias": "ici"
																			},
																			{
																				"Startup-Cost": "0.42"
																			},
																			{
																				"Total-Cost": "50.92"
																			},
																			{
																				"Plan-Rows": "25"
																			},
																			{
																				"Plan-Width": "13"
																			},
																			{
																				"Index-Cond": "(coming_codigo \u003d ci.coming_codigo)"
																			},
																			{
																				"Filter": "(documento_codigo \u003d 7)"
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"name": "",
						"kind": "Aggregate",
						"type": "Aggregate",
						"cond": "",
						"desc": "",
						"attributes": [
							{
								"Strategy": "Plain"
							},
							{
								"Partial-Mode": "Simple"
							},
							{
								"Parent-Relationship": "SubPlan"
							},
							{
								"Subplan-Name": "SubPlan 1"
							},
							{
								"Parallel-Aware": "false"
							},
							{
								"Startup-Cost": "25.24"
							},
							{
								"Total-Cost": "25.25"
							},
							{
								"Plan-Rows": "1"
							},
							{
								"Plan-Width": "8"
							}
						],
						"child": [
							{
								"name": "",
								"kind": "Join",
								"type": "Nested Loop",
								"cond": "",
								"desc": "",
								"attributes": [
									{
										"Parent-Relationship": "Outer"
									},
									{
										"Parallel-Aware": "false"
									},
									{
										"Join-Type": "Inner"
									},
									{
										"Startup-Cost": "0.71"
									},
									{
										"Total-Cost": "25.24"
									},
									{
										"Plan-Rows": "2"
									},
									{
										"Plan-Width": "8"
									},
									{
										"Inner-Unique": "false"
									}
								],
								"child": [
									{
										"name": "tb_itemfactura",
										"kind": "Index scan",
										"type": "Index Scan",
										"cond": "(factura_codigo \u003d f.factura_codigo)",
										"desc": "",
										"attributes": [
											{
												"Parent-Relationship": "Outer"
											},
											{
												"Parallel-Aware": "false"
											},
											{
												"Scan-Direction": "Forward"
											},
											{
												"Index-Name": "tb_itemfactura_factura_codigo_1bb0cecf"
											},
											{
												"Relation-Name": "tb_itemfactura"
											},
											{
												"Alias": "if2"
											},
											{
												"Startup-Cost": "0.29"
											},
											{
												"Total-Cost": "8.34"
											},
											{
												"Plan-Rows": "2"
											},
											{
												"Plan-Width": "8"
											},
											{
												"Index-Cond": "(factura_codigo \u003d f.factura_codigo)"
											}
										]
									},
									{
										"name": "tb_itemremesa",
										"kind": "Index scan",
										"type": "Index Scan",
										"cond": "(remesa_codigo \u003d if2.remesa_codigo)",
										"desc": "",
										"attributes": [
											{
												"Parent-Relationship": "Inner"
											},
											{
												"Parallel-Aware": "false"
											},
											{
												"Scan-Direction": "Forward"
											},
											{
												"Index-Name": "tb_itemremesa_remesa_codigo_58e8e634"
											},
											{
												"Relation-Name": "tb_itemremesa"
											},
											{
												"Alias": "ir2"
											},
											{
												"Startup-Cost": "0.42"
											},
											{
												"Total-Cost": "8.44"
											},
											{
												"Plan-Rows": "1"
											},
											{
												"Plan-Width": "16"
											},
											{
												"Index-Cond": "(remesa_codigo \u003d if2.remesa_codigo)"
											}
										]
									}
								]
							}
						]
					},
					{
						"name": "",
						"kind": "Node",
						"type": "Limit",
						"cond": "",
						"desc": "",
						"attributes": [
							{
								"Parent-Relationship": "SubPlan"
							},
							{
								"Subplan-Name": "SubPlan 2"
							},
							{
								"Parallel-Aware": "false"
							},
							{
								"Startup-Cost": "0.00"
							},
							{
								"Total-Cost": "1.14"
							},
							{
								"Plan-Rows": "1"
							},
							{
								"Plan-Width": "8"
							}
						],
						"child": [
							{
								"name": "tb_itemnotadebito",
								"kind": "Node",
								"type": "Seq Scan",
								"cond": "(itemnotadebito_numero \u003d f.factura_codigo)",
								"desc": "(itemnotadebito_numero \u003d f.factura_codigo)",
								"attributes": [
									{
										"Parent-Relationship": "Outer"
									},
									{
										"Parallel-Aware": "false"
									},
									{
										"Relation-Name": "tb_itemnotadebito"
									},
									{
										"Alias": "ind"
									},
									{
										"Startup-Cost": "0.00"
									},
									{
										"Total-Cost": "1.14"
									},
									{
										"Plan-Rows": "1"
									},
									{
										"Plan-Width": "8"
									},
									{
										"Filter": "(itemnotadebito_numero \u003d f.factura_codigo)"
									}
								]
							}
						]
					},
					{
						"name": "",
						"kind": "Node",
						"type": "Limit",
						"cond": "",
						"desc": "",
						"attributes": [
							{
								"Parent-Relationship": "SubPlan"
							},
							{
								"Subplan-Name": "SubPlan 3"
							},
							{
								"Parallel-Aware": "false"
							},
							{
								"Startup-Cost": "0.00"
							},
							{
								"Total-Cost": "1.14"
							},
							{
								"Plan-Rows": "1"
							},
							{
								"Plan-Width": "8"
							}
						],
						"child": [
							{
								"name": "tb_itemnotadebito",
								"kind": "Node",
								"type": "Seq Scan",
								"cond": "(itemnotadebito_numero \u003d f.factura_codigo)",
								"desc": "(itemnotadebito_numero \u003d f.factura_codigo)",
								"attributes": [
									{
										"Parent-Relationship": "Outer"
									},
									{
										"Parallel-Aware": "false"
									},
									{
										"Relation-Name": "tb_itemnotadebito"
									},
									{
										"Alias": "ind_1"
									},
									{
										"Startup-Cost": "0.00"
									},
									{
										"Total-Cost": "1.14"
									},
									{
										"Plan-Rows": "1"
									},
									{
										"Plan-Width": "8"
									},
									{
										"Filter": "(itemnotadebito_numero \u003d f.factura_codigo)"
									}
								]
							}
						]
					},
					{
						"name": "",
						"kind": "Node",
						"type": "Limit",
						"cond": "",
						"desc": "",
						"attributes": [
							{
								"Parent-Relationship": "SubPlan"
							},
							{
								"Subplan-Name": "SubPlan 4"
							},
							{
								"Parallel-Aware": "false"
							},
							{
								"Startup-Cost": "40.56"
							},
							{
								"Total-Cost": "40.57"
							},
							{
								"Plan-Rows": "1"
							},
							{
								"Plan-Width": "32"
							}
						],
						"child": [
							{
								"name": "",
								"kind": "Node",
								"type": "Unique",
								"cond": "",
								"desc": "",
								"attributes": [
									{
										"Parent-Relationship": "Outer"
									},
									{
										"Parallel-Aware": "false"
									},
									{
										"Startup-Cost": "40.56"
									},
									{
										"Total-Cost": "40.57"
									},
									{
										"Plan-Rows": "2"
									},
									{
										"Plan-Width": "32"
									}
								],
								"child": [
									{
										"name": "",
										"kind": "Sort",
										"type": "Sort",
										"cond": "",
										"desc": "",
										"attributes": [
											{
												"Parent-Relationship": "Outer"
											},
											{
												"Parallel-Aware": "false"
											},
											{
												"Startup-Cost": "40.56"
											},
											{
												"Total-Cost": "40.57"
											},
											{
												"Plan-Rows": "2"
											},
											{
												"Plan-Width": "32"
											},
											{
												"Sort-Key": "\n                    (((((((lpad((empn.empresa_codigocontable)::text, 2, \u00270\u0027::text) || lpad((ccn.cencos_digito)::text, 3, \u00270\u0027::text)) || \u0027-\u0027::text) || (nc.notcon_cencoscodigo)::text) || \u0027(\u0027::text) || (nc.notcon_codigo)::text) || \u0027)\u0027::text))\n                  "
											}
										],
										"child": [
											{
												"name": "",
												"kind": "Join",
												"type": "Nested Loop",
												"cond": "",
												"desc": "",
												"attributes": [
													{
														"Parent-Relationship": "Outer"
													},
													{
														"Parallel-Aware": "false"
													},
													{
														"Join-Type": "Left"
													},
													{
														"Startup-Cost": "4.87"
													},
													{
														"Total-Cost": "40.55"
													},
													{
														"Plan-Rows": "2"
													},
													{
														"Plan-Width": "32"
													},
													{
														"Inner-Unique": "true"
													}
												],
												"child": [
													{
														"name": "",
														"kind": "Join",
														"type": "Nested Loop",
														"cond": "",
														"desc": "",
														"attributes": [
															{
																"Parent-Relationship": "Outer"
															},
															{
																"Parallel-Aware": "false"
															},
															{
																"Join-Type": "Left"
															},
															{
																"Startup-Cost": "4.74"
															},
															{
																"Total-Cost": "40.02"
															},
															{
																"Plan-Rows": "2"
															},
															{
																"Plan-Width": "28"
															},
															{
																"Inner-Unique": "true"
															}
														],
														"child": [
															{
																"name": "",
																"kind": "Join",
																"type": "Nested Loop",
																"cond": "",
																"desc": "",
																"attributes": [
																	{
																		"Parent-Relationship": "Outer"
																	},
																	{
																		"Parallel-Aware": "false"
																	},
																	{
																		"Join-Type": "Inner"
																	},
																	{
																		"Startup-Cost": "4.59"
																	},
																	{
																		"Total-Cost": "39.65"
																	},
																	{
																		"Plan-Rows": "2"
																	},
																	{
																		"Plan-Width": "24"
																	},
																	{
																		"Inner-Unique": "true"
																	}
																],
																"child": [
																	{
																		"name": "tb_itemnotacontabilidad",
																		"kind": "Node",
																		"type": "Bitmap Heap Scan",
																		"cond": "",
																		"desc": "",
																		"attributes": [
																			{
																				"Parent-Relationship": "Outer"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Relation-Name": "tb_itemnotacontabilidad"
																			},
																			{
																				"Alias": "inc"
																			},
																			{
																				"Startup-Cost": "4.31"
																			},
																			{
																				"Total-Cost": "14.73"
																			},
																			{
																				"Plan-Rows": "3"
																			},
																			{
																				"Plan-Width": "8"
																			},
																			{
																				"Recheck-Cond": "((itenotcon_documento)::text \u003d (f.factura_codigo)::text)"
																			}
																		],
																		"child": [
																			{
																				"name": "tb_itemnotacontabilidad_itenotcon_documento_idx",
																				"kind": "Index scan",
																				"type": "Bitmap Index Scan",
																				"cond": "((itenotcon_documento)::text \u003d (f.factura_codigo)::text)",
																				"desc": "",
																				"attributes": [
																					{
																						"Parent-Relationship": "Outer"
																					},
																					{
																						"Parallel-Aware": "false"
																					},
																					{
																						"Index-Name": "tb_itemnotacontabilidad_itenotcon_documento_idx"
																					},
																					{
																						"Startup-Cost": "0.00"
																					},
																					{
																						"Total-Cost": "4.31"
																					},
																					{
																						"Plan-Rows": "3"
																					},
																					{
																						"Plan-Width": "0"
																					},
																					{
																						"Index-Cond": "((itenotcon_documento)::text \u003d (f.factura_codigo)::text)"
																					}
																				]
																			}
																		]
																	},
																	{
																		"name": "tb_notacontabilidad",
																		"kind": "Index scan",
																		"type": "Index Scan",
																		"cond": "(notcon_codigo \u003d inc.notcon_codigo)",
																		"desc": "((estado_codigo \u003c\u003e 145) AND (tipnotcon_codigo \u003d 2) AND (documento_codigo \u003d 7))",
																		"attributes": [
																			{
																				"Parent-Relationship": "Inner"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Scan-Direction": "Forward"
																			},
																			{
																				"Index-Name": "pk_tb_notacontabilidad"
																			},
																			{
																				"Relation-Name": "tb_notacontabilidad"
																			},
																			{
																				"Alias": "nc"
																			},
																			{
																				"Startup-Cost": "0.28"
																			},
																			{
																				"Total-Cost": "8.30"
																			},
																			{
																				"Plan-Rows": "1"
																			},
																			{
																				"Plan-Width": "24"
																			},
																			{
																				"Index-Cond": "(notcon_codigo \u003d inc.notcon_codigo)"
																			},
																			{
																				"Filter": "((estado_codigo \u003c\u003e 145) AND (tipnotcon_codigo \u003d 2) AND (documento_codigo \u003d 7))"
																			}
																		]
																	}
																]
															},
															{
																"name": "tb_centrocosto",
																"kind": "Index scan",
																"type": "Index Scan",
																"cond": "(cencos_codigo \u003d nc.cencos_codigo)",
																"desc": "",
																"attributes": [
																	{
																		"Parent-Relationship": "Inner"
																	},
																	{
																		"Parallel-Aware": "false"
																	},
																	{
																		"Scan-Direction": "Forward"
																	},
																	{
																		"Index-Name": "tb_banco_pkey"
																	},
																	{
																		"Relation-Name": "tb_centrocosto"
																	},
																	{
																		"Alias": "ccn"
																	},
																	{
																		"Startup-Cost": "0.14"
																	},
																	{
																		"Total-Cost": "0.18"
																	},
																	{
																		"Plan-Rows": "1"
																	},
																	{
																		"Plan-Width": "20"
																	},
																	{
																		"Index-Cond": "(cencos_codigo \u003d nc.cencos_codigo)"
																	}
																]
															}
														]
													},
													{
														"name": "tb_empresa",
														"kind": "Index scan",
														"type": "Index Scan",
														"cond": "(ccn.empresa_codigo \u003d empresa_codigo)",
														"desc": "",
														"attributes": [
															{
																"Parent-Relationship": "Inner"
															},
															{
																"Parallel-Aware": "false"
															},
															{
																"Scan-Direction": "Forward"
															},
															{
																"Index-Name": "tb_empresa_empresa_codigo_usuario_codigo_key"
															},
															{
																"Relation-Name": "tb_empresa"
															},
															{
																"Alias": "empn"
															},
															{
																"Startup-Cost": "0.14"
															},
															{
																"Total-Cost": "0.23"
															},
															{
																"Plan-Rows": "1"
															},
															{
																"Plan-Width": "11"
															},
															{
																"Index-Cond": "(ccn.empresa_codigo \u003d empresa_codigo)"
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"name": "",
						"kind": "Node",
						"type": "Limit",
						"cond": "",
						"desc": "",
						"attributes": [
							{
								"Parent-Relationship": "SubPlan"
							},
							{
								"Subplan-Name": "SubPlan 5"
							},
							{
								"Parallel-Aware": "false"
							},
							{
								"Startup-Cost": "40.66"
							},
							{
								"Total-Cost": "40.66"
							},
							{
								"Plan-Rows": "1"
							},
							{
								"Plan-Width": "8"
							}
						],
						"child": [
							{
								"name": "",
								"kind": "Node",
								"type": "Unique",
								"cond": "",
								"desc": "",
								"attributes": [
									{
										"Parent-Relationship": "Outer"
									},
									{
										"Parallel-Aware": "false"
									},
									{
										"Startup-Cost": "40.66"
									},
									{
										"Total-Cost": "40.67"
									},
									{
										"Plan-Rows": "2"
									},
									{
										"Plan-Width": "8"
									}
								],
								"child": [
									{
										"name": "",
										"kind": "Sort",
										"type": "Sort",
										"cond": "",
										"desc": "",
										"attributes": [
											{
												"Parent-Relationship": "Outer"
											},
											{
												"Parallel-Aware": "false"
											},
											{
												"Startup-Cost": "40.66"
											},
											{
												"Total-Cost": "40.66"
											},
											{
												"Plan-Rows": "2"
											},
											{
												"Plan-Width": "8"
											},
											{
												"Sort-Key": "\n                    ncc.notcon_valor\n                  "
											}
										],
										"child": [
											{
												"name": "",
												"kind": "Join",
												"type": "Nested Loop",
												"cond": "",
												"desc": "",
												"attributes": [
													{
														"Parent-Relationship": "Outer"
													},
													{
														"Parallel-Aware": "false"
													},
													{
														"Join-Type": "Inner"
													},
													{
														"Startup-Cost": "4.88"
													},
													{
														"Total-Cost": "40.65"
													},
													{
														"Plan-Rows": "2"
													},
													{
														"Plan-Width": "8"
													},
													{
														"Inner-Unique": "true"
													},
													{
														"Join-Filter": "(inc_1.notcon_codigo \u003d ncc.notcon_codigo)"
													}
												],
												"child": [
													{
														"name": "",
														"kind": "Join",
														"type": "Nested Loop",
														"cond": "",
														"desc": "",
														"attributes": [
															{
																"Parent-Relationship": "Outer"
															},
															{
																"Parallel-Aware": "false"
															},
															{
																"Join-Type": "Inner"
															},
															{
																"Startup-Cost": "4.59"
															},
															{
																"Total-Cost": "39.65"
															},
															{
																"Plan-Rows": "2"
															},
															{
																"Plan-Width": "16"
															},
															{
																"Inner-Unique": "true"
															}
														],
														"child": [
															{
																"name": "tb_itemnotacontabilidad",
																"kind": "Node",
																"type": "Bitmap Heap Scan",
																"cond": "",
																"desc": "",
																"attributes": [
																	{
																		"Parent-Relationship": "Outer"
																	},
																	{
																		"Parallel-Aware": "false"
																	},
																	{
																		"Relation-Name": "tb_itemnotacontabilidad"
																	},
																	{
																		"Alias": "inc_1"
																	},
																	{
																		"Startup-Cost": "4.31"
																	},
																	{
																		"Total-Cost": "14.73"
																	},
																	{
																		"Plan-Rows": "3"
																	},
																	{
																		"Plan-Width": "8"
																	},
																	{
																		"Recheck-Cond": "((itenotcon_documento)::text \u003d (f.factura_codigo)::text)"
																	}
																],
																"child": [
																	{
																		"name": "tb_itemnotacontabilidad_itenotcon_documento_idx",
																		"kind": "Index scan",
																		"type": "Bitmap Index Scan",
																		"cond": "((itenotcon_documento)::text \u003d (f.factura_codigo)::text)",
																		"desc": "",
																		"attributes": [
																			{
																				"Parent-Relationship": "Outer"
																			},
																			{
																				"Parallel-Aware": "false"
																			},
																			{
																				"Index-Name": "tb_itemnotacontabilidad_itenotcon_documento_idx"
																			},
																			{
																				"Startup-Cost": "0.00"
																			},
																			{
																				"Total-Cost": "4.31"
																			},
																			{
																				"Plan-Rows": "3"
																			},
																			{
																				"Plan-Width": "0"
																			},
																			{
																				"Index-Cond": "((itenotcon_documento)::text \u003d (f.factura_codigo)::text)"
																			}
																		]
																	}
																]
															},
															{
																"name": "tb_notacontabilidad",
																"kind": "Index scan",
																"type": "Index Scan",
																"cond": "(notcon_codigo \u003d inc_1.notcon_codigo)",
																"desc": "((estado_codigo \u003c\u003e 145) AND (tipnotcon_codigo \u003d 2) AND (documento_codigo \u003d 7))",
																"attributes": [
																	{
																		"Parent-Relationship": "Inner"
																	},
																	{
																		"Parallel-Aware": "false"
																	},
																	{
																		"Scan-Direction": "Forward"
																	},
																	{
																		"Index-Name": "pk_tb_notacontabilidad"
																	},
																	{
																		"Relation-Name": "tb_notacontabilidad"
																	},
																	{
																		"Alias": "nc_1"
																	},
																	{
																		"Startup-Cost": "0.28"
																	},
																	{
																		"Total-Cost": "8.30"
																	},
																	{
																		"Plan-Rows": "1"
																	},
																	{
																		"Plan-Width": "8"
																	},
																	{
																		"Index-Cond": "(notcon_codigo \u003d inc_1.notcon_codigo)"
																	},
																	{
																		"Filter": "((estado_codigo \u003c\u003e 145) AND (tipnotcon_codigo \u003d 2) AND (documento_codigo \u003d 7))"
																	}
																]
															}
														]
													},
													{
														"name": "tb_notacontabilidadcambio",
														"kind": "Index scan",
														"type": "Index Scan",
														"cond": "((notcon_codigo \u003d nc_1.notcon_codigo)\nand (moneda_codigo \u003d 1))",
														"desc": "",
														"attributes": [
															{
																"Parent-Relationship": "Inner"
															},
															{
																"Parallel-Aware": "false"
															},
															{
																"Scan-Direction": "Forward"
															},
															{
																"Index-Name": "tb_notacontabilidadcambi_notcon_codigo_moneda_cod_9da85b31_uniq"
															},
															{
																"Relation-Name": "tb_notacontabilidadcambio"
															},
															{
																"Alias": "ncc"
															},
															{
																"Startup-Cost": "0.29"
															},
															{
																"Total-Cost": "0.49"
															},
															{
																"Plan-Rows": "1"
															},
															{
																"Plan-Width": "16"
															},
															{
																"Index-Cond": "((notcon_codigo \u003d nc_1.notcon_codigo) AND (moneda_codigo \u003d 1))"
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	};
  constructor() {}

  getExplainPlan(): ExplainPlanObj {
    return this._explain_plan;
  }
}
