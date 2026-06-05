/**
 * Weekly schedule grid. Built to scan: each row is a time band, each cell a show
 * + presenter. v1 uses placeholder programming — swap in the real weekly schedule
 * (see {{SCHEDULE_*}} tokens) when available.
 */
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Slot = { time: string; show: string; presenter: string; accent: string };

const schedule: Slot[] = [
  { time: "06:00", show: "Morning Glory", presenter: "{{PRESENTER_1}}", accent: "border-l-amber" },
  { time: "10:00", show: "Mid-Morning Mix", presenter: "{{PRESENTER_2}}", accent: "border-l-teal" },
  { time: "13:00", show: "Lunchtime Classics", presenter: "{{PRESENTER_3}}", accent: "border-l-magenta" },
  { time: "16:00", show: "Drive Time Decades", presenter: "{{PRESENTER_4}}", accent: "border-l-amber" },
  { time: "19:00", show: "Evening Sessions", presenter: "{{PRESENTER_5}}", accent: "border-l-teal" },
  { time: "22:00", show: "After Dark", presenter: "{{PRESENTER_6}}", accent: "border-l-magenta" },
];

export function ScheduleGrid() {
  return (
    <div>
      {/* Day selector — visual scan aid. Highlights the broadcast week at a glance. */}
      <div className="flex flex-wrap gap-2 mb-8">
        {days.map((d, i) => (
          <span
            key={d}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              i === 0
                ? "bg-amber text-night-deep border-amber"
                : "bg-night-soft text-muted border-night-line"
            }`}
          >
            {d}
          </span>
        ))}
        <span className="px-4 py-2 text-sm text-muted self-center">— same schedule daily (v1 placeholder)</span>
      </div>

      <div className="rounded-2xl border border-night-line overflow-hidden divide-y divide-night-line">
        {schedule.map((slot) => (
          <div
            key={slot.time}
            className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 p-5 sm:p-6 bg-night-soft border-l-4 ${slot.accent} hover:bg-night transition-colors`}
          >
            <div className="font-display font-bold text-2xl text-cream tabular-nums w-20 shrink-0">{slot.time}</div>
            <div className="flex-1">
              <p className="font-display font-semibold text-lg text-cream">{slot.show}</p>
              <p className="text-muted text-[15px]">with {slot.presenter}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
