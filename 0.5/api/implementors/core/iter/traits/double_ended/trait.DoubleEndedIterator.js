(function() {var implementors = {
"generic_array":[["impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"generic_array/iter/struct.GenericArrayIter.html\" title=\"struct generic_array::iter::GenericArrayIter\">GenericArrayIter</a>&lt;T, N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;,</span>"]],
"heapless":[["impl&lt;'a, T, N, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Iter.html\" title=\"struct heapless::spsc::Iter\">Iter</a>&lt;'a, T, N, U, C&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;T&gt;,\n    U: Uxx,\n    C: XCore,</span>"],["impl&lt;'a, T, N, U, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"heapless/spsc/struct.IterMut.html\" title=\"struct heapless::spsc::IterMut\">IterMut</a>&lt;'a, T, N, U, C&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"heapless/trait.ArrayLength.html\" title=\"trait heapless::ArrayLength\">ArrayLength</a>&lt;T&gt;,\n    U: Uxx,\n    C: XCore,</span>"]],
"indexmap":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.Iter.html\" title=\"struct indexmap::set::Iter\">Iter</a>&lt;'_, T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.Drain.html\" title=\"struct indexmap::set::Drain\">Drain</a>&lt;'_, T&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.Iter.html\" title=\"struct indexmap::map::Iter\">Iter</a>&lt;'_, K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.IntoIter.html\" title=\"struct indexmap::map::IntoIter\">IntoIter</a>&lt;K, V&gt;"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.Union.html\" title=\"struct indexmap::set::Union\">Union</a>&lt;'_, T, S&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.SymmetricDifference.html\" title=\"struct indexmap::set::SymmetricDifference\">SymmetricDifference</a>&lt;'_, T, S1, S2&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,\n    S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.IntoKeys.html\" title=\"struct indexmap::map::IntoKeys\">IntoKeys</a>&lt;K, V&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.IntoIter.html\" title=\"struct indexmap::set::IntoIter\">IntoIter</a>&lt;T&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.Values.html\" title=\"struct indexmap::map::Values\">Values</a>&lt;'_, K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.IterMut.html\" title=\"struct indexmap::map::IterMut\">IterMut</a>&lt;'_, K, V&gt;"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.Difference.html\" title=\"struct indexmap::set::Difference\">Difference</a>&lt;'_, T, S&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.Drain.html\" title=\"struct indexmap::map::Drain\">Drain</a>&lt;'_, K, V&gt;"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.Intersection.html\" title=\"struct indexmap::set::Intersection\">Intersection</a>&lt;'_, T, S&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.IntoValues.html\" title=\"struct indexmap::map::IntoValues\">IntoValues</a>&lt;K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.Keys.html\" title=\"struct indexmap::map::Keys\">Keys</a>&lt;'_, K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.ValuesMut.html\" title=\"struct indexmap::map::ValuesMut\">ValuesMut</a>&lt;'_, K, V&gt;"]],
"syn":[["impl&lt;'a, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.PairsMut.html\" title=\"struct syn::punctuated::PairsMut\">PairsMut</a>&lt;'a, T, P&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IterMut.html\" title=\"struct syn::punctuated::IterMut\">IterMut</a>&lt;'a, T&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.Iter.html\" title=\"struct syn::punctuated::Iter\">Iter</a>&lt;'a, T&gt;"],["impl&lt;'a, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.Pairs.html\" title=\"struct syn::punctuated::Pairs\">Pairs</a>&lt;'a, T, P&gt;"],["impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IntoPairs.html\" title=\"struct syn::punctuated::IntoPairs\">IntoPairs</a>&lt;T, P&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IntoIter.html\" title=\"struct syn::punctuated::IntoIter\">IntoIter</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()