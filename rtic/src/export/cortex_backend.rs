pub use cortex_m::{interrupt::InterruptNumber, peripheral::NVIC};

#[cfg(all(
    feature = "cortex-m-basepri",
    not(any(feature = "thumbv7-backend", feature = "thumbv8main-backend"))
))]
compile_error!(
    "Building for Cortex-M with basepri, but 'thumbv7-backend' or 'thumbv8main-backend' backend not selected"
);

#[cfg(all(
    feature = "cortex-m-source-masking",
    not(any(feature = "thumbv6-backend", feature = "thumbv8base-backend"))
))]
compile_error!(
    "Building for Cortex-M with source masking, but 'thumbv6-backend' or 'thumbv8base-backend' backend not selected"
);

#[cfg(any(feature = "cortex-m-basepri", feature = "rtic-uitestv7"))]
pub use cortex_basepri::*;

#[cfg(any(feature = "cortex-m-basepri", feature = "rtic-uitestv7"))]
mod cortex_basepri;

#[cfg(any(feature = "cortex-m-source-masking", feature = "rtic-uitestv6"))]
pub use cortex_source_mask::*;

#[cfg(any(feature = "cortex-m-source-masking", feature = "rtic-uitestv6"))]
mod cortex_source_mask;

#[inline]
#[must_use]
pub const fn cortex_logical2hw(logical: u8, nvic_prio_bits: u8) -> u8 {
    ((1 << nvic_prio_bits) - logical) << (8 - nvic_prio_bits)
}

/// Sets the given `interrupt` as pending
///
/// This is a convenience function around
/// [`NVIC::pend`](../cortex_m/peripheral/struct.NVIC.html#method.pend)
pub fn pend<I>(interrupt: I)
where
    I: InterruptNumber,
{
    NVIC::pend(interrupt);
}
