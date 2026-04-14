/**
 * NutriSnap Validation Suite
 * Checks core decision logic for coverage and consistency.
 */

const ValidationSuite = {
    run() {
        console.group("🚀 NutriSnap Functional Validation");
        const results = {
            total: 0,
            passed: 0,
            failed: 0,
            errors: []
        };

        const goals = ['weight_loss', 'muscle_gain', 'maintain'];
        const hungers = ['low', 'medium', 'high', 'craving'];
        const times = ['morning', 'afternoon', 'night'];
        const diets = ['veg', 'non_veg'];

        goals.forEach(goal => {
            hungers.forEach(hunger => {
                times.forEach(time => {
                    diets.forEach(diet => {
                        results.total++;
                        try {
                            const res = window.suggestMeal(goal, hunger, time, diet);
                            if (res && res.suggested_meal && res.health_score && res.macros) {
                                results.passed++;
                            } else {
                                results.failed++;
                                results.errors.push(`Missing data for: ${goal}/${hunger}/${time}/${diet}`);
                            }
                        } catch (e) {
                            results.failed++;
                            results.errors.push(`Crash for: ${goal}/${hunger}/${time}/${diet} - ${e.message}`);
                        }
                    });
                });
            });
        });

        console.log(`Summary: ${results.passed}/${results.total} Passed`);
        if (results.failed > 0) {
            console.error("Failures:", results.errors);
        }
        console.groupEnd();
        
        return results;
    }
};

window.ValidationSuite = ValidationSuite;
