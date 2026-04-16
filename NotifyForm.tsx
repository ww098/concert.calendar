"use client";

import { FormEvent, useState } from "react";

export function NotifyForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      lineId: String(formData.get("lineId") || ""),
      favoriteArtists: String(formData.get("favoriteArtists") || "")
        .split(",")
        .map((artist) => artist.trim())
        .filter(Boolean),
      channels: formData.getAll("channels")
    };

    const response = await fetch("/api/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    setStatus(result.message);
    event.currentTarget.reset();
  }

  return (
    <form className="content-card notify-form" onSubmit={handleSubmit}>
      <label>
        暱稱
        <input name="name" placeholder="例如：Hana" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" />
      </label>
      <label>
        LINE ID
        <input name="lineId" placeholder="@mylineid" />
      </label>
      <label>
        喜歡的藝人
        <input name="favoriteArtists" placeholder="BLACKPINK, SEVENTEEN, aespa" required />
      </label>
      <div className="notify-form__channels">
        <label>
          <input name="channels" type="checkbox" value="email" defaultChecked />
          Email 通知
        </label>
        <label>
          <input name="channels" type="checkbox" value="line" defaultChecked />
          LINE 通知
        </label>
      </div>
      <button className="primary-button" type="submit">
        儲存通知設定
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
