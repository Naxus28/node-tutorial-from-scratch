# process.nextTick()

The process.nextTick() method adds the callback to the "next tick queue". Once the current turn of the event loop turn runs to completion, all callbacks currently in the next tick queue will be called.This is not a simple alias to setTimeout(fn, 0). It is much more efficient. It runs before any additional I/O events (including timers) fire in subsequent ticks of the event loop.
[process.nextTick()](https://nodejs.org/api/process.html#process_process_nexttick_callback_args)
 


