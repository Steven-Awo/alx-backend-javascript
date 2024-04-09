export default function guardrail(mathFunction) {
  const queuee = [];
  try {
    queuee.push(mathFunction());
  } catch (e) {
    queuee.push(`${e.name}: ${e.message}`);
  }
  queuee.push('Guardrail was processed');
  return queuee;
}
