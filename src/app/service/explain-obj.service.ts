import { Injectable } from "@angular/core";
import { ExplainPlanObj } from "../shared/model/explain-plan-obj";




@Injectable({
  providedIn: "root",
})
export class ExplainObjService {
  private _explain_plan: ExplainPlanObj = {
    "version": "1",
    "signature": "PostgreSQL JDBC Driver",
    "date": "2021-03-27T18:59:41.087230100",
    "sql": "select * from tb_country tc \r\nleft join tb_state ts ON ts.country_id \u003dtc.country_id \r\nleft join tb_town tt on tt.state_id  \u003d ts.state_id ",
    "root": [
      {
        "name": "",
        "kind": "Hash",
        "type": "Hash Join",
        "cond": "(ts.country_id \u003d tc.country_id)",
        "desc": "",
        "attributes": [
          {
            "Parallel-Aware": "false"
          },
          {
            "Join-Type": "Right"
          },
          {
            "Startup-Cost": "20.77"
          },
          {
            "Total-Cost": "36.60"
          },
          {
            "Plan-Rows": "430"
          },
          {
            "Plan-Width": "502"
          },
          {
            "Actual-Startup-Time": "0.518"
          },
          {
            "Actual-Total-Time": "0.544"
          },
          {
            "Actual-Rows": "12"
          },
          {
            "Actual-Loops": "1"
          },
          {
            "Inner-Unique": "true"
          },
          {
            "Hash-Cond": "(ts.country_id \u003d tc.country_id)"
          }
        ],
        "child": [
          {
            "name": "",
            "kind": "Hash",
            "type": "Hash Join",
            "cond": "(tt.state_id \u003d ts.state_id)",
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
                "Startup-Cost": "19.68"
              },
              {
                "Total-Cost": "34.36"
              },
              {
                "Plan-Rows": "430"
              },
              {
                "Plan-Width": "348"
              },
              {
                "Actual-Startup-Time": "0.142"
              },
              {
                "Actual-Total-Time": "0.154"
              },
              {
                "Actual-Rows": "6"
              },
              {
                "Actual-Loops": "1"
              },
              {
                "Inner-Unique": "true"
              },
              {
                "Hash-Cond": "(tt.state_id \u003d ts.state_id)"
              }
            ],
            "child": [
              {
                "name": "tb_town",
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
                    "Relation-Name": "tb_town"
                  },
                  {
                    "Alias": "tt"
                  },
                  {
                    "Startup-Cost": "0.00"
                  },
                  {
                    "Total-Cost": "13.70"
                  },
                  {
                    "Plan-Rows": "370"
                  },
                  {
                    "Plan-Width": "190"
                  },
                  {
                    "Actual-Startup-Time": "0.032"
                  },
                  {
                    "Actual-Total-Time": "0.032"
                  },
                  {
                    "Actual-Rows": "1"
                  },
                  {
                    "Actual-Loops": "1"
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
                    "Startup-Cost": "14.30"
                  },
                  {
                    "Total-Cost": "14.30"
                  },
                  {
                    "Plan-Rows": "430"
                  },
                  {
                    "Plan-Width": "158"
                  },
                  {
                    "Actual-Startup-Time": "0.064"
                  },
                  {
                    "Actual-Total-Time": "0.065"
                  },
                  {
                    "Actual-Rows": "6"
                  },
                  {
                    "Actual-Loops": "1"
                  },
                  {
                    "Hash-Buckets": "1024"
                  },
                  {
                    "Original-Hash-Buckets": "1024"
                  },
                  {
                    "Hash-Batches": "1"
                  },
                  {
                    "Original-Hash-Batches": "1"
                  },
                  {
                    "Peak-Memory-Usage": "9"
                  }
                ],
                "child": [
                  {
                    "name": "tb_state",
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
                        "Relation-Name": "tb_state"
                      },
                      {
                        "Alias": "ts"
                      },
                      {
                        "Startup-Cost": "0.00"
                      },
                      {
                        "Total-Cost": "14.30"
                      },
                      {
                        "Plan-Rows": "430"
                      },
                      {
                        "Plan-Width": "158"
                      },
                      {
                        "Actual-Startup-Time": "0.033"
                      },
                      {
                        "Actual-Total-Time": "0.034"
                      },
                      {
                        "Actual-Rows": "6"
                      },
                      {
                        "Actual-Loops": "1"
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
                "Startup-Cost": "1.04"
              },
              {
                "Total-Cost": "1.04"
              },
              {
                "Plan-Rows": "4"
              },
              {
                "Plan-Width": "154"
              },
              {
                "Actual-Startup-Time": "0.086"
              },
              {
                "Actual-Total-Time": "0.086"
              },
              {
                "Actual-Rows": "11"
              },
              {
                "Actual-Loops": "1"
              },
              {
                "Hash-Buckets": "1024"
              },
              {
                "Original-Hash-Buckets": "1024"
              },
              {
                "Hash-Batches": "1"
              },
              {
                "Original-Hash-Batches": "1"
              },
              {
                "Peak-Memory-Usage": "9"
              }
            ],
            "child": [
              {
                "name": "tb_country",
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
                    "Relation-Name": "tb_country"
                  },
                  {
                    "Alias": "tc"
                  },
                  {
                    "Startup-Cost": "0.00"
                  },
                  {
                    "Total-Cost": "1.04"
                  },
                  {
                    "Plan-Rows": "4"
                  },
                  {
                    "Plan-Width": "154"
                  },
                  {
                    "Actual-Startup-Time": "0.053"
                  },
                  {
                    "Actual-Total-Time": "0.055"
                  },
                  {
                    "Actual-Rows": "11"
                  },
                  {
                    "Actual-Loops": "1"
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
