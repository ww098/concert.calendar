export type SourceConfig = {
  name: string;
  mode: "scrape" | "api";
  endpoint: string;
  parserHint: string;
};

export const sourceConfigs: SourceConfig[] = [
  {
    name: "Live Nation Taiwan",
    mode: "scrape",
    endpoint: "https://www.livenation.com.tw/",
    parserHint: "抓取活動卡片、日期、售票按鈕與場館資訊。"
  },
  {
    name: "拓元售票",
    mode: "api",
    endpoint: "https://tixcraft.com/",
    parserHint: "優先取票頁 JSON 或公開活動清單，再比對台灣場次。"
  },
  {
    name: "KKTIX",
    mode: "api",
    endpoint: "https://kktix.com/",
    parserHint: "整理公開活動與售票開始時間，避免重複寫入。"
  }
];

export async function runMockSync() {
  const startedAt = new Date().toISOString();
  return {
    startedAt,
    finishedAt: new Date(Date.now() + 1200).toISOString(),
    imported: 4,
    skipped: 1,
    sources: sourceConfigs.map((source) => ({
      name: source.name,
      status: "ok",
      endpoint: source.endpoint
    })),
    note: "目前為示範同步流程。實際上可在此接入 cheerio / playwright / vendor API。"
  };
}
