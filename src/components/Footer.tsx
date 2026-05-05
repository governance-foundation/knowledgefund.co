export default function Footer() {
  return (
    <footer
      className="w-full border-t border-white/5 bg-[#09090b] px-4 font-display sm:px-7 lg:px-12"
      style={{ paddingBlock: 64 }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-black tracking-[-0.035em] text-slate-100 lg:text-lg">
            <span>Knowledge</span>
            <span className="text-[#596FD2]">Fund</span>
          </span>
          <p className="text-center text-[9px] normal-case text-slate-500 min-[720px]:text-left lg:text-xs">
            © 2026 KnowledgeFund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
