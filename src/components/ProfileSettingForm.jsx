import React from "react";
export default function ProfileSettingForm() {
  return (
    <div className="">
    <form className="mx-auto rounded-3xl bg-white p-6 sm:p-10">
 
    <div className="flex flex-wrap items-start justify-between gap-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="flex gap-3">
        <button type="button" className="rounded-md border border-line bg-white px-8 py-3 text-navy hover:bg-page focus:outline-none focus-visible:ring-2 focus-visible:ring-navy text-base">Cancel</button>
        <button type="submit" className="rounded-md bg-[#022658] px-8 py-3 font-medium text-[#D3AF34] hover:bg-navy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy text-base focus-visible:ring-offset-2">Save</button>
      </div>
    </div>
 
    <section className="mt-2">
      <h2 className="text-base font-bold">Profile Details</h2>
      <p className="mt-1 text-muted text-sm">Enter your profile information</p>
 
      <div className="mt-6">
        <span className="text-sm text-muted">Profile Image</span>
        <div className="mt-2 flex flex-col items-center justify-center rounded-md border border-dashed border-gray-400/70 px-4 py-10">
          <label className="text-base cursor-pointer rounded-md border border-line bg-white px-6 py-3 text-navy hover:bg-page focus-within:ring-2 focus-within:ring-navy">
            Add File
            <input type="file" accept="image/*" className="sr-only" />
          </label>
          <p className="mt-5 text-sm text-muted">Or drag and drop files</p>
        </div>
      </div>
 
      <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">
        <div>
          <label for="first-name" className="text-sm text-muted">First Name</label>
          <input id="first-name" type="text" className="mt-2 h-14 w-full rounded-md border border-line px-4 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label for="last-name" className="text-sm text-muted">Last Name</label>
          <input id="last-name" type="text" className="mt-2 h-14 w-full rounded-md border border-line px-4 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label for="email" className="text-sm text-muted">Email Address</label>
          <input id="email" type="email" className="mt-2 h-14 w-full rounded-md border border-line px-4 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
        <div>
          <label for="phone" className="text-sm text-muted">Phone Number</label>
          <input id="phone" type="tel" className="mt-2 h-14 w-full rounded-md border border-line px-4 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
        </div>
      </div>
    </section>
 
    <hr className="my-10 border-line/70" />
 
    <section>
      <h2 className="text-lg font-semibold">Regional Settings</h2>
      <p className="mt-1">Set your language and timezone</p>
 
      <div className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
        <div>
          <label for="language" className="text-sm text-muted">Language</label>
          <div className="relative mt-2">
            <select id="language" className="h-14 w-full appearance-none rounded-md border border-line bg-white px-4 pr-12 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l5 5 5-5"/></svg>
          </div>
        </div>
        <div>
          <label for="timezone" className="text-sm text-muted">Timezone</label>
          <div className="relative mt-2">
            <select id="timezone" className="h-14 w-full appearance-none rounded-md border border-line bg-white px-4 pr-12 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy">
              <option>GMT +02:00</option>
              <option>GMT +01:00</option>
              <option>GMT +00:00</option>
              <option>GMT +05:00</option>
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l5 5 5-5"/></svg>
          </div>
        </div>
      </div>
    </section>
 
    <div className="mt-10 flex justify-end gap-3">
      <button type="button" className="rounded-md border border-line bg-white px-8 py-3 text-navy hover:bg-page focus:outline-none focus-visible:ring-2 focus-visible:ring-navy text-base">Cancel</button>
      <button type="submit" className="rounded-md bg-[#022658] px-8 py-3 font-medium text-[#D3AF34] hover:bg-navy/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 text-base">Save</button>
    </div>
 
  </form>
  </div>
  );
}
