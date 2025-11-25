export default function Wave() {
  const waveFill = "#EAEEBA";

  return (
    <svg
      className="relative block w-full h-[50vh] blur-sm" 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.28-168.06-16.15-250.45,2.81C406.2,35.56,325.3,76,250.45,94.56,167.14,114.9,80,109.22,0,92.83V120H1200V95.8C1120,110.49,1043.18,110.16,985.66,92.83Z"
        fill={waveFill}
      />
    </svg>
  );
}
