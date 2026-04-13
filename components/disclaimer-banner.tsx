export default function DisclaimerBanner() {
  return (
    <div className="w-full bg-muted/40 border-b border-border/50 px-4 py-2">
      <p className="text-center text-xs text-muted-foreground tracking-wide">
        <span className="text-primary font-semibold">18+ </span>
        Dieser Blog richtet sich ausschließlich an Erwachsene ab 18 Jahren.&nbsp;
        <span className="text-muted-foreground/70">|</span>&nbsp;
        Hier wird kein Alkohol verkauft — rein informativ.&nbsp;
        <span className="text-muted-foreground/70">|</span>&nbsp;
        Bitte trinken Sie verantwortungsbewusst.
      </p>
    </div>
  )
}
