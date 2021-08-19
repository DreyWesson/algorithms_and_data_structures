// An ancient algorithm for finding all prime numbers up to a given number.
function soe(n) {
  let a = [];
  let p = 2;
  for (let i = p; i <= n; i++) {
    a.push(i);
  }
  console.log(
    compose(p, a, n)
      .filter((m) => m !== 0)
      .join("-")
  );
}

function compose(p, a, n) {
  if (p * p > n) {
    return a;
  }
  a = a.map((m) => (m !== p && m % p === 0 ? 0 : m));
  p = a.find((m) => m !== 0 && m > p);
  return compose(p, a, n);
}

soe(100);
