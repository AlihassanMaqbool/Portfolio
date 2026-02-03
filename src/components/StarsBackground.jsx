// import { Particles } from "@/registry/magicui/particles"

export default function Page() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* <Particles className="absolute inset-0" quantity={100} ease={80} color="#ffffff" refresh={false} /> */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-6xl">Particles Demo</h1>
        <p className="mt-4 text-lg text-muted-foreground">Move your mouse to interact with the particles</p>
      </div>
    </div>
  )
}
