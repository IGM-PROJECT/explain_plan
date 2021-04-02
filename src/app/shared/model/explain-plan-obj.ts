interface ExplainPlanObj {
  version: string;
  signature: string;
  date: string;
  sql: string;
  root: Root[];
}

interface Root {
  name: string;
  kind: string;
  type: string;
  cond: string;
  desc: string;
  attributes: PurpleAttribute[];
  child?: Root[];
}

interface PurpleAttribute {
  "Parent-Relationship"?: string;
  "Parallel-Aware"?: string;
  "Relation-Name"?: string;
  Alias?: string;
  "Startup-Cost"?: string;
  "Total-Cost"?: string;
  "Plan-Rows"?: string;
  "Plan-Width"?: string;
  "Join-Type"?: string;
  "Inner-Unique"?: string;
  "Hash-Cond"?: string;
  "Actual-Startup-Time"?: string;
  "Actual-Total-Time"?: string;
  "Actual-Rows"?: string;
  "Actual-Loops"?: string;
  "Hash-Buckets"?: string;
  "Original-Hash-Buckets"?: string;
  "Hash-Batches"?: string;
  "Original-Hash-Batches"?: string;
  "Peak-Memory-Usage"?: string;
	"Group-Key"?: string;
	"Sort-Key"?:string;
	"Filter"?:string;
	"Scan-Direction"?:string;
	"Index-Cond"?:string;
	"Index-Name"?:string;
	"Strategy"?:string;
	"Partial-Mode"?:string;
	"Subplan-Name"?:string;
	"Recheck-Cond"?:string;
	"Join-Filter"?:string;
  "Rows-Removed-by-Filter"?:string;
}

export { ExplainPlanObj, Root, PurpleAttribute };
