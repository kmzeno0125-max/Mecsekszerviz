import { ShieldCheck } from 'lucide-react';
import castrolSquare from '../assets/files_8595244-2026-05-05T14-04-39-393Z-files_8595244-2026-05-05T11-57-45-375Z-files_8595244-2026-05-05T11-50-49-404Z-image.png';

export default function CastrolBanner() {
  return (
    <section className="bg-primary pt-0 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <ShieldCheck size={48} className="text-white/90 flex-shrink-0 mt-1" />
            <div>
              <p className="font-headline font-bold text-white text-xl sm:text-2xl uppercase tracking-wide mb-1">
                Castrol Service Hivatalos Partner · TÜV Rheinland Minősített
              </p>
              <p className="font-body text-white/85 text-sm sm:text-base leading-relaxed">
                Szervizünk 2022 óta tagja a <strong className="text-white">Castrol Service</strong> hálózatnak, amely követelményeként{' '}
                <strong className="text-white">TÜV Rheinland</strong> minősítésben részesültünk.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="border-2 border-white/40 rounded-lg px-6 py-4 text-center backdrop-blur-sm bg-white/10 flex flex-col items-center">
              <div className="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] lg:w-[190px] lg:h-[190px] flex items-center justify-center">
                <img
                  src={castrolSquare}
                  alt="Castrol Service"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-3 h-0.5 bg-white/40 w-full" />
              <div className="font-body text-white/80 text-xs mt-2 uppercase tracking-wider">Hivatalos Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
